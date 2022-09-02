require("dotenv").config();
const { Sequelize } = require("sequelize");

/* const db = new Sequelize("tmdb", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});
 */

const db = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = db;
