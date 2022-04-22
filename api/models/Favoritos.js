const S = require("sequelize");
const sequelize = require("../config/db");
class Favoritos extends S.Model {}

Favoritos.init(
  {
    movieId: {
      type: S.TEXT,
    },
    userId: {
      type: S.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "favoritos",
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = { Favoritos };
