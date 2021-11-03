const JOI = require('joi');
const { Op } = require('sequelize');
const { Appartment } = require('../../database/models');
const responseCodes = require('./responseCodes');
const { genError } = require('./errorMw');

const AP_SCHEMA = JOI.object({
  appartment_code: JOI.string().required(),
  total_bedrooms: JOI.number().required(),
  total_bathrooms: JOI.number().required(),
  total_suites: JOI.number().required(),
  total_area: JOI.number().required(),
  building_id: JOI.number().required(),
})

const appartmentInfo = (req, _res, next) => {
  const info = req.body;
  const { error } = AP_SCHEMA.validate(info);
  
  if (error) {
    return next(genError(responseCodes.BAD_REQUEST, error.details[0].message))
  }
  return next()
}

const appartmentExists = async (req, _res, next) => {
  const { appartment_code, building_id } = req.body;

  const appartmentExists = await Appartment.findOne({
    where: {
      [Op.and]: [
        { appartment_code },
        { building_id }
      ]
    }
  });
  
  if (appartmentExists) {
    return next(genError(responseCodes.CONFLICT, 'Appartment already registered in this building'))
  }
  return next()
}

const appartmentIsValid = async (req, _res, next) => {
  const { id } = req.params;

  const appartmentIsValid = await Appartment.findOne({ where: { id } })
  console.log(appartmentIsValid);
  if (!appartmentIsValid) {
    return next(genError(responseCodes.BAD_REQUEST, 'Appartment not found'));
  }
  return next();
}

module.exports = {
  appartmentInfo,
  appartmentExists,
  appartmentIsValid,
}