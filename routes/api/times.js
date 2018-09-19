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

router.get('/:id', (req, res) => {
  Time.findById(req.params.id)
    .then(time => {
      if (!time) {
        return res.status(404).json({
          email: 'This time does not exist'
        });
      } else {
        res.json(time); 
      }
    })
})

router.patch('/:id', (req, res) => {
  Time.findById(req.params.id)
    .then(time => {
      if (!time) {
        return res.status(404).json({
          email: 'This time connection does not exist'
        });
      } else {
        time.duration = req.body.duration;
        time.save();
      }
    });
})

router.get('/', (req, res) => {
  Time.find()
  .then(payload => {
    if (!payload) {
      return res.status(404).json({
        email: 'This time does not exist'
      });
    } else {
      let times = {};
      payload.forEach(time => {
        times[time._id] = time;
      });
      res.json(times); 
    }
  });
});


module.exports = router;