const User = require('../models/userModel');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();


const login = async (req, res) => {
  try {
      const userList = await User.findAll({
      raw: true
    });
    const found = userList.find(element => element.username = 'saurav');
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    // let data = {
    //     time: Date(),
    //     userId: 12,
    // }
  
    const token = jwt.sign(found, jwtSecretKey);
  
    res.send(token);
    //res.send(found);
  } catch (error) {
    res.status(400).send("Bad Request")
    console.log(error);
  }
};

module.exports = login;