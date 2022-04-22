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
    username: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: S.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
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
    timestamps: false,
    freezeTableName: true,
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
