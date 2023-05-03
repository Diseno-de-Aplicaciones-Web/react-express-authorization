import { useState, useContext } from "react"
import Dialogo from "./Dialogo"
import Login from "./Login"
import { contextoAutorizacion } from "../servicios/Autorizacion"

function DialogoLogin({rutaDestino}) {

    const { paseAutorizacion } = useContext(contextoAutorizacion)
    const estadoDialogo = useState(false)
    const [ mostrarLogin, setMostrarLogin ] = estadoDialogo

    function abrirDialogo() {
        setMostrarLogin(true)
    }

    return(
        <>
        { ! paseAutorizacion &&
            <>
            <button onClick={abrirDialogo} disabled={mostrarLogin}>Login</button>
            <Dialogo estado={estadoDialogo}>
                <Login rutaDestino={rutaDestino}/>
            </Dialogo>
            </>
        }
        </>
    )
}

export default DialogoLogin