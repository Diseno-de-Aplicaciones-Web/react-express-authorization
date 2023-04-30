import { useContext } from "react"
import { contexto } from "../servicios/Contexto"
import Login from "./Login"

function AccesoPrivado({children}) {
    const { datos } = useContext(contexto)
    return(
        <>
        { datos.paseAutorizacion ? children : <Login/> }
        </>
    )
}

export default AccesoPrivado