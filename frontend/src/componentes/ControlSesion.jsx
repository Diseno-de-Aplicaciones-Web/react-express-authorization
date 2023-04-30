import { useContext } from "react";

import { contexto } from "../servicios/Contexto";
import Login from "./Login";

function ControlSesion() {

    const { datos, accions } = useContext(contexto)

    function manexadorCerrarSesion() {
        accions.cerrarSesion()
    }

    return (
        <div>
            { datos.paseAutorizacion && <>
                <button onClick={manexadorCerrarSesion}>Logout</button>
            </> }
            { ! datos.paseAutorizacion && <Login/> }
        </div>
    )
}

export default ControlSesion