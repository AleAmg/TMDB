const S = require("sequelize");
const db = require("../db");
const { Users } = require("./User");

class ListFilm extends S.Model {}

ListFilm.init(
  {
    idFilm: {
      type: S.NUMBER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "listFilm",
  }
);

ListFilm.belongsTo(Users, { as: "autor" });

module.exports = { ListFilm };
