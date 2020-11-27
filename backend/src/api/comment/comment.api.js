const db = require('../../model');
const { HttpContentType, HttpStatusCode } = require('../../module/constant');

exports.getComments = async(ctx) => {
  const comments = await db.comments.findAll();

  if (!comments)
      ctx.status = HttpStatusCode.BAD_REQUEST;

    ctx.status = HttpStatusCode.OK;
    ctx.type = HttpContentType.JSON;
    ctx.body = comments;
};
