module.exports = (sequelize, DataTypes) => {
    const commentSchema = sequelize.define('comments', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        article: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        freezeTableName: true,
    });

    return commentSchema;
}
