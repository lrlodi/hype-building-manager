module.exports = (sequelize, DataTypes) => {
  const Appartment = sequelize.define('Appartment', {
    appartment_code: DataTypes.INTEGER,
    total_bedrooms: DataTypes.INTEGER,
    total_bathrooms: DataTypes.INTEGER,
    total_suites: DataTypes.INTEGER,
    total_area: DataTypes.INTEGER,
    building_id: DataTypes.INTEGER
  }, { tableName: 'appartments' });

  Appartment.associate = (models) => {
    Appartment.belongsTo(models.Building,
      { as: 'building', foreignKey: 'id' });
  };

  return Appartment;
};