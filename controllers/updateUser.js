const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();


let token_key = process.env.TOKEN_KEY;
let jwtSecretKey = process.env.JWT_SECRET_KEY;

const updateUser = async (req, res) => {
  try {

    const token = req.header(token_key);
    const verified = jwt.verify(token, jwtSecretKey);
    if(verified){
        const updatedRows = await User.update(
            {
              username: req.body.username,
              email: req.body.email,
              password: req.body.password,
              phone: req.body.phone,
            },
            {
              where: { username: "saurav" },
            }
        );
        console.log(updatedRows);
        res.send(updatedRows);
    }else{
          // Access Denied
          return res.status(400).send(error);
    }
  } catch (error) {
    res.status(400).send("Bad Request")
    console.log(error);
  }
};

module.exports = updateUser;