import { useContext } from "react"
import { contextoAutorizacion } from "../servicios/Autorizacion"
import Login from "./Login"

function ZonaRestrinxida({children}) {
    const { autorizado } = useContext(contextoAutorizacion)
    return(
        <>
        { autorizado ? children : <Login/> }
        </>
    )
}

export default ZonaRestrinxida