const Sequelizer = require("sequelize");
const db = require("../config/database");

const Comment = db.define("comment", {
  id: {
    type: Sequelizer.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  postId: { type: Sequelizer.INTEGER },
  name: { type: Sequelizer.STRING },
  email: { type: Sequelizer.STRING },
  body: { type: Sequelizer.STRING },
  
});

module.exports = Comment;
