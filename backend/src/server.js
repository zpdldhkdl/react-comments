require('dotenv').config();
const koa = require('koa');
const koaRouter = require('koa-router');
const bodyParser = require('koa-bodyparser');
const api = require('./api');

function run() {
    const app = new koa();
    const router = new koaRouter();

    app.use(bodyParser());

    const port = process.env.PORT || 4000;

    app.listen(port, () => console.log(`server stared to port ${port}`));

};

run();
