import { useContext, useState } from "react";

import { contexto } from "../servicios/Contexto";
import { obtenerPase } from "../lib/fetch";
import { useNavigate } from "react-router-dom";

function Login({rutaDestino}) {

    const navigate = useNavigate()

    const { datos, accions } = useContext(contexto)

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
            accions.guardarPase(pase)
            if (rutaDestino) navigate(rutaDestino)
        }
        else alert("Usuario o contraseña erroneos")
    }

    return (
        <>
        { ! datos.paseAutorizacion && 
            <div>
                <label>
                    Usuario
                    <input type="text" value={usuario} onInput={manexadorInputUsuario}/>
                </label>
                <label>
                    Contrasinal
                    <input type="password" value={contrasinal} onInput={manexadorInputContrasinal}/>
                </label>
                <button onClick={manexadorBotonEnviar}>Login</button>
            </div>
        }
        </>
    )

}

export default Login