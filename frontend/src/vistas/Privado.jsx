import AccesoPrivado from "../componentes/AccesoPrivado"
import ControlSesion from "../componentes/ControlSesion"

function Privado() {
    return(
        <AccesoPrivado>
        <h2>O teu espazo</h2>
        <ControlSesion/>
        <p>Esta é a páxina privada da aplicación de proba de autorización con react.</p>
        <p>Só se pode ver se inicias sesión</p>
        </AccesoPrivado>
    )
}

export default Privado