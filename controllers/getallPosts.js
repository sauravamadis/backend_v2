const Post = require('../models/postModel');
const Comment = require('../models/commentModel');
const User = require('../models/userModel');

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
// const { post } = require('../routes/index.routes');
dotenv.config();


let token_key = process.env.TOKEN_KEY;
let jwtSecretKey = process.env.JWT_SECRET_KEY;

const getallPosts = async (req, res) => {
  try {
    const token = req.header(token_key);
    const verified = jwt.verify(token, jwtSecretKey);

    const userList = await User.findAll({
      raw: true
    });

    var userIdList = []
    userList.forEach(function (item, index) {
      userIdList.push(item.id)
    });

    if(userIdList.indexOf(verified.id) !== -1){
      const postList = await Post.findAll({
        raw: true
      });
      const commentList = await Comment.findAll({
        raw: true
      });

      postList.forEach(function (post, index) {
        post['commentCount'] = 0
        commentList.forEach(function (comment, index) {
          if(post.id == comment.postId){
            post.commentCount += 1
          }
        });
      });   
      console.log(commentList)
      res.send(postList)
    }else{
          // Access Denied
      return res.status(401).send("Unauthorized");
    }
   
  } catch (error) {
    res.status(400).send("Bad Request")
    console.log(error);
  }
};

module.exports = getallPosts;