const Post = require('../models/postModel');

const post = async (req, res) => {
    console.log(req.body)
    try{
        const post = await Post.create({
            userId: req.body.userId,
            title: req.body.title,
            body: req.body.body,
        });
        return res.send(post);
    }catch(err){
        return res.status(500).json(err);
    }
};

module.exports = post;