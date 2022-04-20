const sequelize = require("sequelize");

const db = new sequelize("TMDB", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
