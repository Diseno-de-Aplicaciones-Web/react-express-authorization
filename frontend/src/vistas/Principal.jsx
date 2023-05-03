import DialogoLogin from "../componentes/DialogoLogin"
import Logout from "../componentes/Logout"

function Principal() {

    return(
        <>
        <h2>Ola!</h2>
        <DialogoLogin rutaDestino="/privado/"/>
        <Logout/>
        <p>Esta é a páxina princial desta aplicación de probas de autorización con React.</p>
        <p>Esta páxina é pública e podese ver sen iniciar sesión</p>
        </>
    )
}

export default Principal