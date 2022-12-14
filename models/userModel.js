const Sequelizer = require("sequelize");
const db = require("../config/database");

const User = db.define("user", {
  id: {
    type: Sequelizer.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: { type: Sequelizer.STRING },
  password: { type: Sequelizer.STRING },
  email: { type: Sequelizer.STRING },
  phone: { type: Sequelizer.STRING },
});

module.exports = User;
