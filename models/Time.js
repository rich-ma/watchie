const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TimeSchema = new Schema({
  duration: {
    type: Number,
    required: true,
  },
  locationId: {
    type: Number,
    required: true,
  },
  userId: {
    type: Number,
    required: true,
  }, 
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = Time = mongoose.model('times', TimeSchema);
