const Sequelizer = require("sequelize");
const db = require("../config/database");

const Post = db.define("post", {
  id: {
    type: Sequelizer.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: { type: Sequelizer.INTEGER },
  title: { type: Sequelizer.STRING },
  body: { type: Sequelizer.STRING },
  
});

module.exports = Post;
