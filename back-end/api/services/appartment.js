const { Appartment } = require('../../database/models');

const insertNewAppartment = async (info) => {
  const { appartment_code, total_bedrooms, total_bathrooms, total_suites, total_area, building_id } = info;
  const newAppartment = await Appartment.create({
    appartment_code, total_bedrooms, total_bathrooms, total_suites, total_area, building_id 
  });
  return newAppartment;
}

const getAppartments = async () => {
  const appartmentsList = await Appartment.findAll();
  return appartmentsList;
}

const getOne = async (id) => {
  const singleAppartment = await Appartment.findOne({ where: { id }});
  return singleAppartment;
}

const updateAppartment = async (id, info) => {
  const { appartment_code, total_bedrooms, total_bathrooms, total_suites, total_area, building_id } = info;
  const updatedAppartment = await Appartment.update(
    { appartment_code, total_bedrooms, total_bathrooms, total_suites, total_area, building_id },
    { where: { id }}
  );
  return getOne(id);
}

const deleteAppartment = async (id) => {
  return Appartment.destroy({ where: { id } })
}

module.exports = {
  insertNewAppartment,
  getAppartments,
  getOne,
  updateAppartment,
  deleteAppartment,
}
