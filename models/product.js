'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    itemNumber: DataTypes.STRING,
    formula: DataTypes.STRING,
    raw: DataTypes.STRING,
    label: DataTypes.STRING,
    box: DataTypes.STRING,
    bottle: DataTypes.STRING,
    cap: DataTypes.STRING,
    misc1: DataTypes.STRING,
    misc2: DataTypes.STRING,
    misc3: DataTypes.STRING,
    notes: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};