const { Router } = require('express');
const postRouter = Router();

const post = require('../../controllers/post');
const comment = require('../../controllers/comment');
const getAllPosts = require('../../controllers/getallPosts');
const getPostComments = require('../../controllers/getPostComments');


postRouter.post('/newpost', post);
postRouter.post('/comment', comment);
postRouter.get('/getallposts', getAllPosts);
postRouter.post('/getpostcomments', getPostComments);


module.exports = postRouter;
