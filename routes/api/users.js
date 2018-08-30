const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const key = require('../../config/keys').secretOrKey;
const validateRegisterInput = require('../../validation/register');

//register new user
router.post('/', (req, res) => {
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
              .then(user => {
                const payload = { id: user.id, name: user.name };

                jwt.sign(payload, key, { expiresIn: 3600 }, (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                });
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
});

//edit a user
router.patch('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).json({email: 'This user does not exist' });
      } else {
        user.fname = req.body.fname;
        user.lname = req.body.lname;
        user.save();
      }
    });
});

//user show page
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).json({
          email: 'This user does not exist'
        });
      } else {
        res.json(user);
      }
    })
});

module.exports = router;