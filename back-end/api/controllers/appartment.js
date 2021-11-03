const rescue = require('express-rescue');
const validate = require('../middlewares/appartmentMw');
const responseCodes = require('../middlewares/responseCodes');
const appartmentServices = require('../services/appartment');

const insertNewAppartment = [
  validate.appartmentInfo,
  validate.appartmentExists,
  rescue(async (req, res, _next) => {

    const newAppartment = await appartmentServices.insertNewAppartment(req.body);
    return res.status(responseCodes.STATUS_CREATED).json({ newAppartment });
  })
]

const getAppartments = [
  rescue(async (_req, res, _next) => {
    const appartmentsList = await appartmentServices.getAppartments();
    return res.status(responseCodes.STATUS_OK).json({ appartmentsList })
  })
]

const updateAppartment = [
  validate.appartmentIsValid,
  rescue(async(req, res, _next) => {
    const { id } = req.params;
    const updatedAppartment = await appartmentServices.updateAppartment(id, req.body);
    return res.status(responseCodes.STATUS_OK).json({ updated: updatedAppartment})
  })
]

const deleteAppartment = [
  validate.appartmentIsValid,
  rescue(async(req, res, _next) => {
    const { id } = req.params;
    const appartmentToBeDeleted = await appartmentServices.getOne(id);
    await appartmentServices.deleteAppartment(id);
    return res.status(responseCodes.STATUS_OK).json({ deleted: appartmentToBeDeleted });
  })
]


module.exports = {
  insertNewAppartment,
  getAppartments,
  updateAppartment,
  deleteAppartment,
}