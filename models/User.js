const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fname: {
    type: String,
    required: true,
  },
  passwordDigest: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  subscription: {
    type: String
  }
});

module.exports = User = mongoose.model('users', UserSchema);
