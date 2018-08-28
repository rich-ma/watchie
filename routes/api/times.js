const express = require("express");
const router = express.Router();
const Time = require('../../models/Time');

//new time
router.post('/', (req, res) => {

  Time.findOne({
      userId: req.body.userId,
      locationId: req.body.locationId
    })
    .then(time => {
      if (time) {
        error.time = 'This location has already been registered';
        return res.status(400).json(errors);
      } else {
        const newTime = new Time({
          duration: req.body.duration,
          userId: req.body.userId,
          locationId: req.body.locationId,
        })
        newTime.save()
          .then(time => res.json(time))
          .catch(err => console.log(err));
      }
    })
})