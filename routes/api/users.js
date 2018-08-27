const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jsonwebtoken = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

router.get("/test", (req, res) => res.json({
  msg: "This is the users route"
}));

router.get('/current', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  res.json({
    msg: 'Success'
  });
})

//register new user
router.post('/register', (req, res) => {
  console.log(req.body);
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({email: "A user already exists with this email"})
      } else {
        const newUser = new User({
          fname: req.body.fname,
          lname: req.body.lname,
          email: req.body.email,
          passwordDigest: req.body.passwordDigest
        })
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.passwordDigest, salt, (err, hash) => {
            if (err) throw err;
            newUser.passwordDigest = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          })
        })
      }
    })
})

//create new session
router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({
      email
    })
    .then(user => {
      if (!user) {
        return res.status(404).json({
          email: 'This email is not registered'
        });
      }
      bcrypt.compare(password, user.passwordDigest)
        .then(isMatch => {
          if (isMatch) {
            const payload = {
              id: user.id,
              email: user.email,
              fname: user.fname,
            };

            jsonwebtoken.sign(
              payload,
              keys.secretOrKey,
              // Tell the key to expire in one hour
              {
                expiresIn: 3600
              },
              (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token
                });
              });
          } else {
            return res.status(400).json({
              password: 'Incorrect password'
            });
          }
        })
    })
})

module.exports = router;

