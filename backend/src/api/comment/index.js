const Router = require('koa-router');

const commentRouter = new Router();
const { getComments, postComment } = require('./comment.api');

commentRouter.get('/comments', getComments);
commentRouter.post('/', postComment);

module.exports = commentRouter;
