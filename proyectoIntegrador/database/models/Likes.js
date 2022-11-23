module.exports = function (sequelize, dataTypes) {

    let alias = "Likes"

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        }, id_usuario: {
            type: dataTypes.INTEGER
        }, id_posteo: {
            type: dataTypes.INTEGER
        }

    }
    let config = {
        tableName: "likes",
        timestamps: false,
        underscored: true
    }
    let Likes = sequelize.define(alias, cols, config);
    Likes.associate = function (models) {
        Likes.belongsTo(models.Posteo, {
            as: "posteo",
            foreignKey: "id_posteo"
        })
    }


    return Likes;
}