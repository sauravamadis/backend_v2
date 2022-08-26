const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

let token_key = process.env.TOKEN_KEY;
let jwtSecretKey = process.env.JWT_SECRET_KEY;

const updateUser = async (req, res) => {
  try {
    const token = req.header(token_key);
    const verified = parseInt(jwt.verify(token, jwtSecretKey));
    console.log(verified)
    const userList = await User.findAll({
      raw: true,
    });

    var userIdList = [];
    userList.forEach(function (item, index) {
      userIdList.push(item.id);
    });

    if (userIdList.indexOf(verified) !== -1) {
      const userList = await User.findAll({
        raw: true,
      });
      var found = {};
      userList.forEach(function (item, index) {
        if ((verified == item.id)) {
          found = item;
        }
      });

      const updatedRows = await User.update(
        {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          phone: req.body.phone,
        },
        {
          where: { id: found.id },
        }
      );
      res.send(updatedRows);
    } else {
      // Access Denied
      return res.status(401).send("Unauthorized");
    }
  } catch (error) {
    res.status(400).send("Bad Request");
    console.log(error);
  }
};

module.exports = updateUser;
