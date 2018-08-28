const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  category: {
      type: String,
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

module.exports = Category = mongoose.model('categories', CategorySchema);
