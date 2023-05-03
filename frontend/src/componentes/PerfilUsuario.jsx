import { useState, useContext, useEffect } from "react"
import { aDataURL } from "../lib/ficheros.mjs"
import { recuperarPerfil, enviarPerfil } from "../lib/fetch.jsx"
import { contextoAutorizacion } from "../servicios/Autorizacion.jsx"
import style from "./PerfilUsuario.module.css"

function PerfilUsuario() {

    const { paseAutorizacion } = useContext(contextoAutorizacion)

    const [ nome, setNome ] = useState("")
    const [ telefono, setTelefono ] = useState("")
    const [ correoElectronico, setCorreoElectronico ] = useState("")
    const [ fichero, setFichero ] = useState()

    function manexadorNome(evento) {
        setNome(evento.target.value)
    }
    function manexadorTelefono(evento) {
        setTelefono(evento.target.value)
    }
    function manexadorCorreo(evento) {
        setCorreoElectronico(evento.target.value)
    }
    function manexadorFichero(evento) {
        const fichero = evento.target.files[0]
        if (fichero) aDataURL(fichero, setFichero)
        else setFichero("")
    }
    function manexadorEnviar() {
        const perfil = {
            nome,
            telefono,
            correoElectronico,
            fichero
        }
        enviarPerfil(perfil, paseAutorizacion, manejadorResultadoEnvio)
    }
    function manejadorResultadoEnvio(datos) {
        if ( datos === false ) alert("No ha sido posible guardar el perfil")
    }
    function obtenerDatosPerfil(){
        recuperarPerfil(paseAutorizacion,rellenarDatosPerfil)
    }
    function rellenarDatosPerfil(datosPerfil) {
        if (datosPerfil) {
            setNome(datosPerfil.nome)
            setTelefono(datosPerfil.telefono)
            setCorreoElectronico(datosPerfil.correoElectronico)
            setFichero(datosPerfil.fotoDePerfil.datos)
        }
    }

    useEffect(
        obtenerDatosPerfil,
        [paseAutorizacion]
    )

    return (
        <div className={style.centrado+" "+style.contenedor}>
            <div className={style.contenedor}>
                <img className={style.imagen} src={fichero} alt="Imagen de perfil." />
                <label>
                    Nombre
                    <input className={style.bloque} type="text" value={nome} onInput={manexadorNome}/>
                </label>
                <label>
                    Teléfono
                    <input className={style.bloque} type="tel" value={telefono} onInput={manexadorTelefono}/>
                </label>
                <label>
                    Correo
                    <input className={style.bloque} type="email" value={correoElectronico} onInput={manexadorCorreo}/>
                </label>
                <label>
                    Imagen de perfil
                    <input className={style.bloque} type="file" onInput={manexadorFichero}/>
                </label>
                <button onClick={manexadorEnviar}>Guardar</button>
            </div>
        </div>
    )
}

export default PerfilUsuario