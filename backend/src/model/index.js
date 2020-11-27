const Sequelize = require('sequelize');
const db = {};

let sequelize = new Sequelize({
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    dialect: process.env.MYSQL_DIALECT,
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.comments = require('./schema/comment.schema')(sequelize, Sequelize);

module.exports = db;

