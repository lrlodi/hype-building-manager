module.exports = (sequelize, DataTypes) => {
  const Building = sequelize.define('Building', {
    name: DataTypes.STRING,
    abbreviation: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    appartments: DataTypes.INTEGER
  }, { tableName: 'buildings' });

  return Building;
};