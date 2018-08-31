const express = require('express');
const router = express.Router();
const webpush = require('web-push');
const User = require('../../models/User');

router.post('/subscribe', (req, res) => {
  const subscription = req.body.sub;

  User.findById(req.body.user.id)
    .then(user => {
      if (!user) {
        res.status(404).json({msg: "User not found for /api/push/subscribe"});
      } else {
        user.subscription = JSON.stringify(subscription);
        user.save();
      }
    });

  res.status(201).json({});
  const payload = JSON.stringify({
    title: "Watchie",
    fname: req.body.user.fname
  });

  webpush.sendNotification(subscription, payload)
    .catch(err => {
      console.log(err);
    });
});

router.get('/', (req, res) => {
  User.find()
    .then(users => {
      users.forEach(user => {
        const subscription = user.subscription;
        res.status(201).json({});
        const payload = JSON.stringify({
          title: "Watchie",
          fname: user.fname
        });
      
        webpush.sendNotification(subscription, payload)
          .catch(err => {
            console.log(err);
          });
      });
    });
});

module.exports = router;