import { createContext, useState } from "react";

const contexto = createContext()

function ProveedorDeContexto({children}) {

    const [ paseAutorizacion, setPaseAutorizacion ] = useState(false)

    function guardarPase(pase){
        setPaseAutorizacion(pase)
    }

    function cerrarSesion(){
        setPaseAutorizacion(false)
    }

    const datos = { paseAutorizacion }
    const accions = { guardarPase, cerrarSesion }

    const datosContexto = { datos, accions }

    return(
        <contexto.Provider value={datosContexto}>
            {children}
        </contexto.Provider>
    )
}

export {
    contexto,
    ProveedorDeContexto
}