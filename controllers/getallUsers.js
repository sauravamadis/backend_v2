const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();


let token_key = process.env.TOKEN_KEY;
let jwtSecretKey = process.env.JWT_SECRET_KEY;

const getUsers = async (req, res) => {
  try {
    console.log(req.header(token_key))
    const token = req.header(token_key);
    const verified = jwt.verify(token, jwtSecretKey);
    if(verified){
      const userList = await User.findAll({
        raw: true
      });
  
      console.log(userList)
      res.send(userList);
    }else{
          // Access Denied
          return res.status(401).send(error);
    }
    const userList = await User.findAll({
      raw: true
    });

    console.log(userList)
    res.send(userList);
  } catch (error) {
    res.status(400).send("Bad Request")
    console.log(error);
  }
};

module.exports = getUsers;