import { createContext, useEffect, useState } from "react";

const contextoAutorizacion = createContext()
const storage = localStorage
const claveStorage = "paseAutorizacion"

function ProveedorAutorizacion({children}) {

    const [ paseAutorizacion, setPaseAutorizacion ] = useState(storage.getItem(claveStorage) ?? false)
    const [ autorizado, setAutorizado ] = useState(!!paseAutorizacion)

    function guardarPase(pase){
        setPaseAutorizacion(pase)
        storage.setItem(claveStorage, pase)
    }

    function cerrarSesion(){
        setPaseAutorizacion(false)
        storage.removeItem(claveStorage)
    }

    useEffect(
        ()=>{
            setAutorizado(!!paseAutorizacion)
        },
        [paseAutorizacion]
    )

    const datosContexto = { paseAutorizacion, autorizado, guardarPase, cerrarSesion }

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