import { useState, useContext } from "react"
import { aDataURL } from "../lib/ficheros.mjs"
import { enviarPerfil } from "../lib/fetch.jsx"
import { contexto } from "../servicios/Contexto.jsx"

function PerfilUsuario() {

    const { datos } = useContext(contexto)

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
        aDataURL(fichero, setFichero)
    }
    function manexadorEnviar() {
        const perfil = {
            nome,
            telefono,
            correoElectronico,
            fichero
        }
        enviarPerfil(perfil, datos.paseAutorizacion, manejadorEnvio)
    }
    function manejadorEnvio(datos) {
        if ( datos === false ) alert("No ha sido posible guardar el perfil")
    }

    return (
        <>
        <label>
            Nombre
            <input type="text" value={nome} onInput={manexadorNome}/>
        </label>
        <label>
            Teléfono
            <input type="tel" value={telefono} onInput={manexadorTelefono}/>
        </label>
        <label>
            Correo
            <input type="email" value={correoElectronico} onInput={manexadorCorreo}/>
        </label>
        <label>
            Imagen de perfil
            <input type="file" onInput={manexadorFichero}/>
            <img src={fichero} alt="previsualización de la imagen de perfil." />
        </label>
        <button onClick={manexadorEnviar}>Guardar</button>
        </>
    )
}

export default PerfilUsuario