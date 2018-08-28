const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = require('./User');
const locationSchema = require('./Location');

const CategorySchema = new Schema({
  category: {
      type: String,
      required: true,
    },
    locationId: LocationSchema,
    userId: UserSchema, 
    date: {
      type: Date,
      default: Date.now,
    },
  })

module.exports = Category = mongoose.model('categories', CategorySchema);
