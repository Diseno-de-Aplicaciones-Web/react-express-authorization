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

        let perfil = await usuario.getPerfilDeUsuario()
        if ( perfil ) { 
            await perfil.update(peticion.body)
        } else {
            perfil = await usuario.createPerfilDeUsuario(peticion.body)
        }

        let foto = await perfil.getFotoDePerfil()
        if ( foto ) {
            await foto.update({ datos: peticion.body.fichero })
        } else {
            await perfil.createFotoDePerfil({ datos: peticion.body.fichero })
        }

        resposta.sendStatus(201)

    } catch (excepcion) {
        manexadorDeExcepcions(excepcion, resposta)
    }
})

app.get(prefixoDaRuta+"usuarios/perfiles/", intermedioAutorization, async (peticion, resposta)=>{
    try {
        const usuario = await ContaDeUsuario.findByPk(resposta.locals.autorizacion.id)
        const perfil = await usuario.getPerfilDeUsuario({
            include: ["fotoDePerfil"]
        })
        resposta.status(201).json(perfil)
    } catch (excepcion) {
        manexadorDeExcepcions(excepcion, resposta)
    }
})