'use strict';
module.exports = (sequelize, DataTypes) => {
  var DiscoCollection = sequelize.define('DiscoCollection', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  DiscoCollection.associate = function(models) {
      models.DiscoCollection.hasMany(models.Disco, { foreignKey: 'discoCollectionId' });
  };
  return DiscoCollection;
};
