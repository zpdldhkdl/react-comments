const db = require('../../model');
const { HttpContentType, HttpStatusCode } = require('../../module/constant');

exports.getComments = async(ctx) => {
  const comments = await db.comments.findAll({
    order: [['id', 'DESC']]
  });

  if (!comments)
      ctx.status = HttpStatusCode.BAD_REQUEST;

    ctx.status = HttpStatusCode.OK;
    ctx.type = HttpContentType.JSON;
    ctx.body = comments;
};

exports.postComment = async(ctx) => {
  const { nickname, article } = ctx.query;

  const ret = await db.comments.create({
    nickname: nickname,
    article: article,
  });

  if(!ret.dataValues)
    ctx.status = HttpStatusCode.BAD_REQUEST;

  ctx.status = HttpStatusCode.OK;
}
