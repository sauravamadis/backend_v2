const { Router } = require('express');
const postRouter = require('./post.routes');

const indexPostRoutes = Router();

indexPostRoutes.use('/post', postRouter);

module.exports = indexPostRoutes;
