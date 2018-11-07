module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("recipedata", {
    id: {
      type: Number,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    url:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    style: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    styleid:{
      type: Number,
      allowNull: false,
    },
    size: {
      type: number,
      allowNull: false,
    },
    og:{
      
    }
  });
  return Post;
};
