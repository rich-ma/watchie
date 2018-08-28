const express = require("express");
const router = express.Router();
const Location = require('../../models/Location');

//new location
router.post('/', (req, res) => {

  Location.findOne({
      name: req.body.name,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    })
    .then(user => {
      if (user) {
        error.location = 'This location has already been registered';
        return res.status(400).json(errors);
      } else {
        const newLocation = new Location({
          name: req.body.name,
          latitude: req.body.latitude,
          longitude: req.body.longitude,
          street: req.body.street,
          streetNumber: req.body.streetNumber,
          city: req.body.city,
          zipCode: req.body.zipCode
        })

        newLocation.save()
          .then(location => res.json(location))
          .catch(err => console.log(err));
      }
    })
})