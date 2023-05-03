import ZonaRestrinxida from "../componentes/ZonaRestrinxida"
import Logout from "../componentes/Logout"
import PerfilUsuario from "../componentes/PerfilUsuario"

function Privado() {
    return(
        <>
        <h2>O teu espazo privado</h2>
        <ZonaRestrinxida>
        <Logout/>
        <p>Esta é a páxina privada da aplicación de proba de autorización con react.</p>
        <p>Só se pode ver se inicias sesión</p>
        <PerfilUsuario/>
        </ZonaRestrinxida>
        </>
    )
}

export default Privado