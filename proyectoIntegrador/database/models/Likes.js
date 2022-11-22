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


    return Likes;
}