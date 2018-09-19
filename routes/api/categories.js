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
  Category.findById(req.params.id)
    .then(category => {
      if (!category) {
        return res.status(404).json({
          email: 'This category connection does not exist'
        });
      } else {
        category.type = req.body.type;
        category.save();
      }
    });
})

router.get('/:id', (req, res) => {
  Category.findById(req.params.id)
    .then(category => {
      if (!category) {
        return res.status(404).json({
          email: 'This category does not exist'
        });
      } else {
        res.json(category); //???
      }
    })
})

router.get('/', (req, res) => {
  Category.find()
  .then(payload => {
    if (!payload) {
      return res.status(404).json({
        email: 'This category does not exist'
      });
    } else {
      let categories = {};
      payload.forEach(category => {
        categories[category._id] = category;
      });
      res.json(categories); 
    }
  });
});

module.exports = router;