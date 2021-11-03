const express = require('express');
const buildingController = require('../controllers/building');

const route = express.Router();

route.post('/', buildingController.insertNewBuilding);
route.get('/', buildingController.getBuildings);
route.put('/:id', buildingController.updateBuilding);
route.delete('/:id', buildingController.deleteBuilding);

module.exports = route;
