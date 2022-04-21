const S = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");

class Users extends S.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

Users.init(
  {
    email: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    password: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    salt: {
      type: S.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "Users",
  }
);

Users.beforeCreate((users) => {
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      users.salt = salt;
      return users.hash(users.password, salt);
    })
    .then((hash) => {
      users.password = hash;
    });
});

module.exports = { Users };
