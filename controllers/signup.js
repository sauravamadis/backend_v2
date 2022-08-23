const User = require('../models/userModel');

const signUp = async (req, res) => {
    console.log(req.body)
    try{
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone
        });
        return res.send(user);
    }catch(err){
        return res.status(500).json(err);
    }
};

module.exports = signUp;