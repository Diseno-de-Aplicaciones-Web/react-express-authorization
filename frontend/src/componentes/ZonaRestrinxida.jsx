import { useContext } from "react"
import { contextoAutorizacion } from "../servicios/Autorizacion"
import Login from "./Login"

function ZonaRestrinxida({children}) {
    const { paseAutorizacion } = useContext(contextoAutorizacion)
    return(
        <>
        { paseAutorizacion ? children : <Login/> }
        </>
    )
}

export default ZonaRestrinxida