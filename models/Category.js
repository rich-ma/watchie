const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  category: {
      type: String,
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

module.exports = Category = mongoose.model('categories', CategorySchema);
