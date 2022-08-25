const Post = require("../models/postModel");
const Comment = require("../models/commentModel");
const User = require("../models/userModel");

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
// const { post } = require('../routes/index.routes');
dotenv.config();

let token_key = process.env.TOKEN_KEY;
let jwtSecretKey = process.env.JWT_SECRET_KEY;

const getallPosts = async (req, res) => {
  try {
    const token = req.header(token_key);
    const verified = jwt.verify(token, jwtSecretKey);

    const userList = await User.findAll({
      raw: true,
    });

    var userIdList = [];
    userList.forEach(function (item, index) {
      userIdList.push(item.id);
    });

    if (userIdList.indexOf(verified.id) !== -1) {
      const commentList = await Comment.findAll({
        raw: true,
      });
      var postComments = []
      commentList.forEach(function (comment, index) {
        console.log(comment)

        if (req.body.postId == comment.postId) {
          postComments.push(comment)
        }
      });

      console.log(req.body.postId);
      res.send(postComments);
    } else {
      // Access Denied
      return res.status(401).send("Unauthorized");
    }
  } catch (error) {
    res.status(400).send("Bad Request");
    console.log(error);
  }
};

module.exports = getallPosts;
