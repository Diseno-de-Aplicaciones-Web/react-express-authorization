import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { contextoAutorizacion } from "../servicios/Autorizacion";

function Logout({rutaDestino}) {

    const { paseAutorizacion, cerrarSesion } = useContext(contextoAutorizacion)
    const navigate = useNavigate()

    function manexadorBoton() {
        if (cerrarSesion) cerrarSesion()
        navigate(rutaDestino ?? "/")
    }

    return (
        <>
        { paseAutorizacion && <button onClick={manexadorBoton}>Logout</button> }
        </>
    )

}

export default Logout