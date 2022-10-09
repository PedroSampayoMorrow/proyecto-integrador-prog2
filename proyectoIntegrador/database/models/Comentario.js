module.exports = function (sequelize, dataTypes) {

    let alias = "Comentario"

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type : dataTypes.INTEGER
        },
        id_usuario: {
            type : dataTypes.INTEGER
        },
        id_posteo: {
            type : dataTypes.INTEGER
        },
        texto: {
            allowNull: false,
            type: dataTypes.STRING(150)
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        }
    }
    let config = {
        tableName : "comentarios",
        timestamps: false,
        underscored :true
    }
    let Comentarios = sequelize.define (alias,cols,config);

    return Comentarios;
}