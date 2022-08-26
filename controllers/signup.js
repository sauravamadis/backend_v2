const User = require('../models/userModel');
const { hashPassword } = require('../utils/encrypt')

const signUp = async (req, res) => {
    console.log(req.body)
    const password = await hashPassword(req.body.password);
    try{
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: password,
            phone: req.body.phone
        });
        return res.send(user);
    }catch(err){
        return res.status(500).json(err);
    }
};

module.exports = signUp;