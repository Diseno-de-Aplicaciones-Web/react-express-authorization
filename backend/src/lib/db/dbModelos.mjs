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
    chaveS3: {
        type: DataTypes.STRING,
        unique: true
    },
    tipoMime: {
        type: DataTypes.STRING,
    },
    tamanho: {
        type: DataTypes.INTEGER
    }
})

ContaDeUsuario.hasOne(PerfilDeUsuario)
PerfilDeUsuario.belongsTo(ContaDeUsuario)

Ficheiro.hasOne(PerfilDeUsuario, { as: "fotoDePerfil"})
PerfilDeUsuario.belongsTo(Ficheiro, { as: "fotoDePerfil"})

//await db.sync({ alter: true })
await db.sync()

export {
    ContaDeUsuario,
    PerfilDeUsuario,
    Ficheiro
}