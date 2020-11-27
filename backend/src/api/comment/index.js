const Router = require('koa-router');

const commentRouter = new Router();
const { getComments } = require('./comment.api');

commentRouter.get('/comments', getComments);

module.exports = commentRouter;
