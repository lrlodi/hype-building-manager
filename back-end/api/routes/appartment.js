const express = require('express');
const appartmentController = require('../controllers/appartment');

const route = express.Router();

route.post('/', appartmentController.insertNewAppartment);
route.get('/', appartmentController.getAppartments);
route.put('/:id', appartmentController.updateAppartment)
route.delete('/:id', appartmentController.deleteAppartment)

module.exports = route;
