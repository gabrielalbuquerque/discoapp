'use strict';
module.exports = (sequelize, DataTypes) => {
  var Disco = sequelize.define('Disco', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Disco.associate = function(models) {
    // associations can be defined here
  };
  return Disco;
};
