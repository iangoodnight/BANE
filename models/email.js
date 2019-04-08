'use strict';
module.exports = (sequelize, DataTypes) => {
  const Email = sequelize.define('Email', {
    email: {
    	allowNull: false,
    	primaryKey: true,
    	type: DataTypes.STRING,
    	unique: true,
    	validate: {
    		isEmail: true
    	}
    },
    employeeId: {
    	type: DataTypes.INTEGER
    }
  }, {});
  Email.associate = function(models) {
    // associations can be defined here
    // models.Email.belongsTo(models.People, {
    // 	onDelete: 'CASCADE',
    // 	foreignKey: {
    // 		allowNull: true
    // 	}
    // });
  };
  return Email;
};