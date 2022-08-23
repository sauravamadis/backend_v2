const { Router } = require('express');
const userRouter = require('./user.routes');

const indexUserRoutes = Router();

indexUserRoutes.use('/user', userRouter);

module.exports = indexUserRoutes;
