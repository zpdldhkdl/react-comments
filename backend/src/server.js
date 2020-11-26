require('dotenv').config();
const koa = require('koa');
const koaRouter = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const api = require('./api');
const db = require('./model');

function run() {
    const app = new koa();
    const router = new koaRouter();

    app.use(bodyParser());
    app.use(cors());

    router.use('/api', api.routes());

    app.use(router.routes());
    app.use(router.allowedMethods());

    const port = process.env.PORT || 4000;

    db.sequelize.sync()
        .then(() => {
            app.listen(port, () => console.log(`server stared to port ${port}`));
        })
};

run();
