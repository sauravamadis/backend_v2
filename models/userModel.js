const Sequelizer = require('sequelize');
const db = require('../config/database');


const User = db.define('user', {
  id: {
    type: Sequelizer.UUID,
    defaultValue: Sequelizer.UUIDV4,
    primaryKey: true
  },
  username: { type: Sequelizer.STRING },
  password: { type: Sequelizer.STRING },
  email: { type: Sequelizer.STRING },
  phone: { type: Sequelizer.STRING },
});


module.exports = User;
