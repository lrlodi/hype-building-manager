module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('appartments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      appartment_code: {
        type: Sequelize.STRING
      },
      total_bedrooms: {
        type: Sequelize.INTEGER
      },
      total_bathrooms: {
        type: Sequelize.INTEGER
      },
      total_suites: {
        type: Sequelize.INTEGER
      },
      total_area: {
        type: Sequelize.INTEGER
      },
      building_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete:'CASCADE',
        references: {
          model: 'buildings',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('appartments');
  }
};