'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    PO: DataTypes.STRING,
    customer: DataTypes.INTEGER,
    product: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    dateOrdered: DataTypes.DATE,
    scheduledDate: DataTypes.DATE,
    shipDate: DataTypes.DATE,
    rep: DataTypes.INTEGER,
    notes: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};