import { DataTypes } from "sequelize"
import db from "./db.mjs"

const ContaDeUsuario = db.define('ContaDeUsuario', {
    nomeDeUsuario: {
        type: DataTypes.STRING,
        unique: true
    },
    resumoDoContrasinal: {
        type: DataTypes.STRING
    }
});

const PerfilDeUsuario = db.define('PerfilDeUsuario',{
    nome: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    correoElectronico: {
        type: DataTypes.STRING
    },
})

const Ficheiro = db.define("Fichero",{
    datos: {
        type: DataTypes.TEXT,
    }
})

ContaDeUsuario.hasOne(PerfilDeUsuario)
PerfilDeUsuario.belongsTo(ContaDeUsuario)

PerfilDeUsuario.hasOne(Ficheiro, {
    as: "fotoDePerfil",
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Ficheiro.belongsTo(PerfilDeUsuario, {
    as: "fotoDePerfil"
})

//await db.sync({ alter: true })
await db.sync()

export {
    ContaDeUsuario,
    PerfilDeUsuario,
    Ficheiro
}