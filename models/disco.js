'use strict';
module.exports = (sequelize, DataTypes) => {
  var Disco = sequelize.define('Disco', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Disco.associate = function(models) {
    models.Disco.belongsTo(models.DiscoCollection, { foreignKey: 'discoCollectionId', onDelete: 'cascade', hooks: true });
  };
  return Disco;
};
