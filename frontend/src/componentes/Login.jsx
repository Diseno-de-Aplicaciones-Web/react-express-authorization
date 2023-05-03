import { useContext, useState } from "react";
import { contextoAutorizacion } from "../servicios/Autorizacion";
import { obtenerPase } from "../lib/fetch";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css"

function Login({rutaDestino}) {

    const navigate = useNavigate()

    const { paseAutorizacion, guardarPase } = useContext(contextoAutorizacion)

    const [ usuario, setUsuario ] = useState("")
    const [ contrasinal, setContrasinal] = useState("")

    function manexadorInputUsuario(evento){
        setUsuario(evento.target.value)
    }

    function manexadorInputContrasinal(evento) {
        setContrasinal(evento.target.value)
    }

    function manexadorBotonEnviar() {
        obtenerPase(usuario, contrasinal, verificarResultado)
    }

    function verificarResultado(pase) {
        if(pase) { 
            guardarPase(pase)
            if (rutaDestino) navigate(rutaDestino)
        }
        else alert("Usuario o contraseña erroneos")
    }

    return (
        <>
        { ! paseAutorizacion && 
            <div className={styles.contenedor}>
                <label>
                    Usuario
                    <input className={styles.bloque} type="text" value={usuario} onInput={manexadorInputUsuario}/>
                </label>
                <label>
                    Contrasinal
                    <input className={styles.bloque} type="password" value={contrasinal} onInput={manexadorInputContrasinal}/>
                </label>
                <button className={styles.boton} onClick={manexadorBotonEnviar}>Login</button>
            </div>
        }
        </>
    )

}

export default Login