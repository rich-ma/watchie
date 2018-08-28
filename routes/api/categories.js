const express = require("express");
const router = express.Router();
const Category = require('../../models/Category');

//new category
router.post('/', (req, res) => {
  //can write validtion for category type later

  Category.findOne({userId: req.body.userId, locationId: req.body.locationId })
  .then(category =>{
    if(category) {
      error.category = 'This location has already been registered';
      return res.status(400).json(errors);
    } else {
      const newCategory = new Category({
        category: req.body.category,
        userId: req.body.userId,
        locationId: req.body.locationId,
      })
      newCategory.save()
        .then(category => res.json(category))
        .catch(err => console.log(err));
    }
  })
})

router.patch('/:id', (req, res) => {
  Category.findById


})