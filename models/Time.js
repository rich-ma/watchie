const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = require('./User');
const LocationSchema = require('./Location');

const TimeSchema = new Schema({
  duration: {
    type: Number,
    required: true,
  },
  locationId: LocationSchema,
  userId: UserSchema, 
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = Time = mongoose.model('times', TimeSchema);
