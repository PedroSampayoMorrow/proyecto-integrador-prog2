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
    let Comentario = sequelize.define (alias,cols,config);
    
    Comentario.associate = function (models) {
        Comentario.belongsTo(models.Usuario,{
            as:"usuario",
            foreignKey:"id_usuario"
        })

        Comentario.belongsTo(models.Posteo,{
            as:"posteo",
            foreignKey:"id_posteo"
        })}
    /*Comentario.associate = function (models) {
        Comentario.belongsTo(models.Usuario,{
            as:"usuario",
            foreignKey:"id_usuario"
        })

        Comentario.belongsTo(models.Posteo,{
            as:"posteo",
            foreignKey:"id_posteo"
        })
    }*/

    return Comentario;
}