module.exports = function (sequelize, dataTypes) {

    let alias = "Posteo"

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            allowNull: false,
            type: dataTypes.STRING(50)
        },
        descripcion: {
            allowNull: false,
            type: dataTypes.STRING(150)
        },
        imagen_url: {
            allowNull: false,
            type: dataTypes.STRING(300)
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        id_usuario: {
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: "posteos",
        timestamps: false,
        underscored: true
    }
    let Posteo = sequelize.define(alias, cols, config);
    Posteo.associate = function (models) {
        Posteo.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "id_usuario"
        })

        Posteo.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "id_posteo"
        })

        Posteo.hasMany(models.Likes, {
            as: "likes",
            foreignKey: "id_posteo"
        })
    }


    return Posteo;
}