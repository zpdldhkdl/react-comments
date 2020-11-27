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
        },
        createdAt: {
            type: DataTypes.DATE,
            default: Date.now,
        },
        updatedAt: {
            type: DataTypes.DATE,
            default: Date.now,
        }
    }, {
        freezeTableName: true,
    });

    return commentSchema;
}
