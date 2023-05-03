import { createContext, useState } from "react";

const contextoAutorizacion = createContext()

function ProveedorAutorizacion({children}) {

    const [ paseAutorizacion, setPaseAutorizacion ] = useState(false)

    function guardarPase(pase){
        setPaseAutorizacion(pase)
    }

    function cerrarSesion(){
        setPaseAutorizacion(false)
    }

    const datosContexto = { paseAutorizacion, guardarPase, cerrarSesion }

    return(
        <contextoAutorizacion.Provider value={datosContexto}>
            {children}
        </contextoAutorizacion.Provider>
    )
}

export {
    contextoAutorizacion,
    ProveedorAutorizacion,
}