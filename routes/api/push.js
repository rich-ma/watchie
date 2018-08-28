const express = require('express');
const router = express.Router();
const webpush = require('web-push');

router.post('/subscribe', (req, res) => {
  const subscription = req.body;
  res.status(201).json({});
  const payload = JSON.stringify({ title: "Watchie" });

  webpush.sendNotification(subscription, payload)
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;