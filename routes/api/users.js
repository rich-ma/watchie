const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');

router.get("/test", (req, res) => res.json({
  msg: "This is the users route"
}));

router.get('/current', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  res.json({
    id: req.user.id,
    fname: req.user.fname,
    email: req.user.email,
  });
});

//register new user
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

   if (!isValid) {
     return res.status(400).json(errors);
   }

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        // Use the validations to send the error
        errors.email = 'Email already exists';
        return res.status(400).json(errors);
      } else {
        const newUser = new User({
          fname: req.body.fname,
          lname: req.body.lname,
          email: req.body.email,
          passwordDigest: req.body.password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.passwordDigest, salt, (err, hash) => {
            // if (err) throw err;
            newUser.passwordDigest = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
});

module.exports = router;