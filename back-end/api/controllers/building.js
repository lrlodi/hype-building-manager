const rescue = require('express-rescue');
const validate = require('../middlewares/buildingMw');
const responseCodes = require('../middlewares/responseCodes');
const buildingServices = require('../services/building');

const insertNewBuilding = [
  validate.buildingInfo,
  validate.buildingExists,
  rescue(async (req, res) => {
    const { name, abbreviation, address, city, state, appartments } = req.body;
    const buildingInfo = {
      name,
      abbreviation,
      address,
      city,
      state,
      appartments
    };

    const insertedBuilding = await buildingServices.insertNewBuilding(buildingInfo);
    return res.status(responseCodes.STATUS_CREATED).json({ insertedBuilding });
  })
];

const getBuildings = [
  rescue(async (req, res) => {

    const buildingsList = await buildingServices.getBuildings();
    return res.status(responseCodes.STATUS_OK).json({ buildingsList });
  })
]

const updateBuilding = [
  validate.buildingIsValid,
  rescue(async (req, res, _next) => {
    const { id } = req.params;
    const updatedBuilding = await buildingServices.updateBuilding(id, req.body);
    return res.status(responseCodes.STATUS_OK).json({ updated: updatedBuilding });
  })
]

const deleteBuilding = [
  validate.buildingIsValid,
  rescue(async (req, res, _next) => {
    const { id } = req.params;
    const buildingToBeDeleted = await buildingServices.getOne(id);
    await buildingServices.deleteBuilding(id);
    return res.status(responseCodes.STATUS_OK).json({ deleted: buildingToBeDeleted });
  })
]

module.exports = {
  insertNewBuilding,
  getBuildings,
  updateBuilding,
  deleteBuilding,
}
