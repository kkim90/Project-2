module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define("Recipe", {
    name: DataTypes.STRING,
    style: DataTypes.STRING,
    abv: DataTypes.INTEGER,
    ibu: DataTypes.INTEGER,
    description: DataTypes.TEXT
  });
  return Recipe;
};
