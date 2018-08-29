const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TimeSchema = new Schema({
  duration: {
    type: Number,
    required: true,
  },
  locationId: {
    type: Schema.Types.ObjectId,
    ref: 'locations'
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = Time = mongoose.model('times', TimeSchema);
