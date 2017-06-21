var express = require('express');
var router = express.Router();

const Ingredient = require('../models/Ingredient');
const apiingredientController = require ('../controllers/apiingredientController');

router.get('/', apiingredientController.getIngredientsApi);

router.post('/', apiingredientController.postIngredientsApi);

router.get('/:id', apiingredientController.getEditIngredientsApi);

router.post('/:id/edit', apiingredientController.updateIngredientsApi);

router.delete('/:id/delete', apiingredientController.deleteIngredientsApi);


module.exports = router;
