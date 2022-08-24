const { Router } = require('express');
const postRouter = Router();

const post = require('../../controllers/post');
const Comment = require('../../controllers/comment');


postRouter.post('/newpost', post);
postRouter.post('/comment', Comment);


module.exports = postRouter;
