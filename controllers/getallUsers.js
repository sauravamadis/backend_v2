const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();


let token_key = process.env.TOKEN_KEY;
let jwtSecretKey = process.env.JWT_SECRET_KEY;

const getUsers = async (req, res) => {
  try {
    const token = req.header(token_key);
    const verified = parseInt(jwt.verify(token, jwtSecretKey));

    const userList = await User.findAll({
      raw: true
    });

    var userIdList = []
    userList.forEach(function (item, index) {
      userIdList.push(item.id)
    });
    
    if(userIdList.includes(verified)){
      res.send(userList);
    }else{
          // Access Denied
      return res.status(401).send("Unauthorized");
    }
   
  } catch (error) {
    res.status(400).send("Bad Request")
    console.log(error);
  }
};

module.exports = getUsers;