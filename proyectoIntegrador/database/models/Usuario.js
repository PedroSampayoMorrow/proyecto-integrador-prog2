module.exports = function (sequelize, dataTypes) {

    let alias = "Usuario"

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
        apellido: {
            allowNull: false,
            type: dataTypes.STRING(50)
        },
        email: {
            allowNull: false,
            type: dataTypes.STRING(100)
        },
        usuario: {
            allowNull: false,
            type: dataTypes.STRING(50)
        },
        contrasenia: {
            allowNull: false,
            type: dataTypes.STRING(50),
            default: 1234
        },
        fecha_nacimiento: {
            type: dataTypes.DATE,
            allowNull: false
        },
        numero_documento: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        foto: {
            allowNull: false,
            type: dataTypes.STRING(300)
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        }
    }
    let config = {
        tableName: "usuarios",
        timestamps: false,
        underscored: true
    }
    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models) {
        Usuario.hasMany(models.Posteo, {
            as: "posteo",
            foreignKey: "id_usuario"
        })

        Usuario.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "id_usuario"
        })

        Usuario.belongsToMany(models.Usuario, {
            as: "following",
            through: "seguidos",
            foreignKey: "id_seguidor",
            otherKey: "id_seguido",
            timestamps: false
        })
    }
    return Usuario;
}