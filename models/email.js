'use strict';

// Creating our Email model
//Set it as export to access it from 'models'
module.exports = (sequelize, DataTypes) => {
  const Email = sequelize.define('Email', {
		email: {
			type: DataTypes.STRING,
    	allowNull: false,
    	validate: {
    		isEmail: true
   		}
   	}
  });
  Email.associate = function(models) {
    // associations can be defined here
    // Email.belongsTo(models.User);
  };

  return Email;
};