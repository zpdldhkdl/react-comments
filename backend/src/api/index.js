const Router = require('koa-router');

const apiRouter = new Router();

apiRouter.use('/comment', require('./comment').routes());

module.exports = apiRouter;
