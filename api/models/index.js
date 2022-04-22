const { Users } = require("./User");
const { Favoritos } = require("./Favoritos");

/* Users.belongsToMany(Favoritos, { through: 'user_favoritos' });
Favoritos.belongsToMany(Users, { through: 'user_favoritos' }); */

module.exports = { Users, Favoritos };
