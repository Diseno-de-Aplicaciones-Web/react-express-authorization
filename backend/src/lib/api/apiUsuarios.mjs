import { hash } from "bcrypt"

import manexadorDeExcepcions from "../excepcions.mjs";
import { prefixoDaRuta } from "./apiConfiguracion.mjs";
import { app } from "./inicioExpress.mjs";
import { ContaDeUsuario, PerfilDeUsuario } from "../db/dbModelos.mjs"
import { intermedioAutorization } from "./middleware.mjs";

app.post(prefixoDaRuta+"usuarios/", async (peticion, resposta)=>{
    try {
        const resumoDoContrasinal = await hash(peticion.body.contrasinal, 10)
        const datosUsuario = {...peticion.body, resumoDoContrasinal}
        const usuario = await ContaDeUsuario.create(datosUsuario)
        resposta.status(201).json(usuario)
    } catch (excepcion) {
        manexadorDeExcepcions(excepcion, resposta)
    }
})

app.post(prefixoDaRuta+"usuarios/perfiles/", intermedioAutorization, async (peticion, resposta)=>{
    try {
        const usuario = await ContaDeUsuario.findByPk(resposta.locals.autorizacion.id)
        const perfil = await usuario.createPerfilDeUsuario(peticion.body)
        resposta.status(201).json(perfil)
    } catch (excepcion) {
        manexadorDeExcepcions(excepcion, resposta)
    }
})

app.get(prefixoDaRuta+"usuarios/perfiles/", intermedioAutorization, async (peticion, resposta)=>{
    try {
        const usuario = await ContaDeUsuario.findByPk(resposta.locals.autorizacion.id)
        const perfil = await usuario.getPerfilDeUsuario()
        resposta.status(201).json(perfil)
    } catch (excepcion) {
        manexadorDeExcepcions(excepcion, resposta)
    }
})