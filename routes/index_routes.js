const { Router } = require('express');
const indexUserRoutes = require('./user/index.routes');
// const indexCloudAccountRoutes = require('./cloud-account/index.routes');
// const indexAKSRoutes = require('./aks/index.routes');
// const indexCloudAccountUserRoutes = require('./cloud-account-user/index.routes');
// const indexCloudAccountUserRoleRoutes = require('./cloud-account-user-role/index.routes');
// const indexApplicationInsightContainerRoutes = require('./application-insight-container/index.routes');
// const indexServiceNameChartRoutes = require('./service-name-chart/index.routes');

const indexRouter = Router();

indexRouter.use('/', indexUserRoutes);
// indexRouter.use('/', indexCloudAccountRoutes);
// indexRouter.use('/', indexCloudAccountUserRoleRoutes);
// indexRouter.use('/', indexAKSRoutes);
// indexRouter.use('/', indexCloudAccountUserRoutes);
// indexRouter.use('/', indexApplicationInsightContainerRoutes);
// indexRouter.use('/', indexServiceNameChartRoutes);

module.exports = indexRouter;