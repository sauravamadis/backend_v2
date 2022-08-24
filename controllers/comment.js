const Comment = require('../models/commentModel');

const comment = async (req, res) => {
    console.log(req.body)
    try{
        const comment = await Comment.create({
            postId: req.body.postId,
            name: req.body.name,
            email: req.body.email,
            body: req.body.body,
        });
        return res.send(comment);
    }catch(err){
        return res.status(500).json(err);
    }
};

module.exports = comment;