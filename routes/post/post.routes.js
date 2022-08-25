const { Router } = require('express');
const postRouter = Router();

const post = require('../../controllers/post');
const comment = require('../../controllers/comment');
const getAllPosts = require('../../controllers/getallPosts');


postRouter.post('/newpost', post);
postRouter.post('/comment', comment);
postRouter.get('/getallposts', getAllPosts);


module.exports = postRouter;
