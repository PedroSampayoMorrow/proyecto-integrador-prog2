module.exports = function (sequelize, dataTypes) {

    let alias = "Seguidor"

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        }, id_seguidor: {
            type: dataTypes.INTEGER
        }, id_seguido: {
            type: dataTypes.INTEGER
        }

    }
    let config = {
        tableName: "seguidos",
        timestamps: false,
        underscored: true
    }
    let Seguidor = sequelize.define(alias, cols, config);


    return Seguidor;
}