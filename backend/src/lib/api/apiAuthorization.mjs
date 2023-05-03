import { compare } from "bcrypt"
import jwt from "jsonwebtoken"

import { prefixoDaRuta } from "./apiConfiguracion.mjs";
import { app } from "./inicioExpress.mjs";
import manexadorDeExcepcions from "../excepcions.mjs";
import { ContaDeUsuario } from "../db/dbModelos.mjs"

app.post(prefixoDaRuta+"sesion/", async (peticion, resposta)=>{
    try {

        const usuario = await ContaDeUsuario.findOne({
            where: { nomeDeUsuario: peticion.body.nomeDeUsuario }
        })

        if ( usuario === null ) return resposta.sendStatus(401)

        const autentificado = await compare(
            peticion.body.contrasinal, usuario.resumoDoContrasinal
        )

        if (autentificado) {
            const paseAutorizacion = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET)
            return resposta.send(paseAutorizacion)
        }

        return resposta.sendStatus(401)
        
    } catch (error) {
        return manexadorDeExcepcions(error, resposta)
    }
})