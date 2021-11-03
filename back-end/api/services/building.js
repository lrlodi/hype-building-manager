const { Building } = require('../../database/models');

const insertNewBuilding = async (buildingInfo) => {
  const { name, abbreviation, address, city, state, appartments } = buildingInfo;
  const newBuilding = await Building.create({ name, abbreviation, address, city, state, appartments })
  return newBuilding;
}

const getBuildings = async () => {
  const buildingsList = await Building.findAll()
  return buildingsList
}

const getOne = async (id) => {
  const singleBuilding = await Building.findOne({ where: { id }});
  return singleBuilding
}

const updateBuilding = async (id, info) => {
  const { name, abbreviation, address, city, state, appartments } = info;
  const updatedBuilding = await Building.update(
    { name, abbreviation, address, city, state, appartments },
    { where: { id }}
  );
  return getOne(id);
}

const deleteBuilding = async (id) => {
  return Building.destroy({ where: { id }})
}

module.exports = {
  insertNewBuilding,
  getBuildings,
  getOne,
  updateBuilding,
  deleteBuilding,
}