const mongoose = require('mongoose');
const Ingredient = require('../models/Ingredient');


exports.getIngredients = (req, res) => {
  Ingredient.find()
    .then((ingredients) => {
        res.render('index', {
          title: 'Ingredients',
          ingredients: ingredients
    })
  })
};

exports.postIngredients = (req, res) => {
  const name = req.body.ingredient_name;
  let ingredient = new Ingredient();
  ingredient.name = name;
  ingredient.save()
    .then(() => {
      res.redirect('/')
    })
};

exports.getEditIngredient = (req, res) => {
  Ingredient.findOne({ _id: req.params.id })
  // shows params. req gets sent when the connection is goign to our server res is what we get sent back
  // res.send(req.params)
    .then(ingredient => { //render a template
      res.render('editIngredient', {ingredient: ingredient});
    })
};

exports.updateIngredients = (req, res) => {
  Ingredient.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true // returns new ingredient
  })
    .then(ingredient => {
      res.redirect('/')
    })
};

// exports.deleteIngredients = function(req, res){
//   Ingredient.findByIdAndRemove({_id: req.params.id},
// 	   function(err){
//   		if(err) res.json(err);
//   		else    res.redirect('/ingredients');
//   	});
// };
// exports.deleteIngredient = (req, res) => {
//   console.log("delete");
//   Ingredient.findOneAndRemove({ _id: req.params.id }, req.body )
//   .then(() => {
//     res.redirect('/');
//   })
// };
exports.deleteIngredients = (req, res) => {
  Ingredient.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/');
    });
};
