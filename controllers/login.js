const User = require('../models/userModel');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const { comparePassword } = require('../utils/encrypt')


dotenv.config();


const login = async (req, res) => {
  try {
      var check = false
      const user = await User.findAll({
      raw: true,
      where:{
        username: req.body.username
      }
    })
    if(user.length){
      
      check = await comparePassword(req.body.password,user[0].password)
      console.log(check)
      if(check){
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
      
        const token = jwt.sign(user[0].id, jwtSecretKey);
      
        res.send(token);
      }else{
        res.send("Incorrect password")
      }
    }else{
      res.send("user doesn't exist")
    }
    
    
    // userList.forEach(element => async() => {
    //   console.log(req.body.password,element.password)
    //   const check = await comparePassword(req.body.password,element.password)
    //   console.log(check)
    // });
    // const found = userList.find(element => {
    //   // (element.username == req.body.username)&&(element.password == req.body.password)
    //   //const validPassword = await bcrypt.compare(req.body.password, element.password);
    //   console.log(req.body.password,element.password)
    //   const check = comparePassword(req.body.password,element.password)
    //   console.log(check)
    //   //(element.username == req.body.username)&&(comparePassword(req.body.password,element.password))
    // });
    
    //res.send(found);
  } catch (error) {
    res.status(400).send("Bad Request")
    console.log(error);
  }
};

module.exports = login;