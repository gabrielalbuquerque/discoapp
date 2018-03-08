'use strict';
module.exports = (sequelize, DataTypes) => {
  var DiscoCollection = sequelize.define('DiscoCollection', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  DiscoCollection.associate = function(models) {
    DiscoCollection.hasMany(models.Disco, {foreignKeyConstraint: true});
  };
  return DiscoCollection;
};
