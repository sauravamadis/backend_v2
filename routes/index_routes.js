const { Router } = require('express');
const indexUserRoutes = require('./user/index.routes');
const indexPostRoutes = require('./post/index.routes');


const indexRouter = Router();

indexRouter.use('/', indexUserRoutes);
indexRouter.use('/', indexPostRoutes);

module.exports = indexRouter;