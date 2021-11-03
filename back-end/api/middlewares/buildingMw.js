const JOI = require('joi');
const { Building } = require('../../database/models')
const responseCodes = require('./responseCodes');
const { genError } = require('./errorMw');


const BUILDING_SCHEMA = JOI.object({
  name: JOI.string().required(),
  abbreviation: JOI.string().required(),
  address: JOI.string().required(),
  city: JOI.string().required(),
  state: JOI.string().required(),
  appartments:JOI.number().required()
});

const buildingInfo = (req, _res, next) => {
  const info = req.body;
  const { error } = BUILDING_SCHEMA.validate(info);

  if (error) {
    return next(genError(responseCodes.BAD_REQUEST, error.details[0].message));
  }
  return next();
};

const buildingExists = async (req, _res, next) => {
  const { name } = req.body;
  const buildingRegistered = await Building.findOne({ where: { name }});

  if (buildingRegistered) {
    return next(genError(responseCodes.CONFLICT, 'Building already registered'));
  }
  return next();
}

const buildingIsValid = async (req, _res, next) => {
  const { id } = req.params;

  const buildingIsValid = await Building.findOne({ where: { id } })
  if (!buildingIsValid) {
    return next(genError(responseCodes.BAD_REQUEST, 'Building not found'));
  }
  return next();
}

module.exports = {
  buildingInfo,
  buildingExists,
  buildingIsValid,
}
