import Login from "../componentes/Login"

function Principal() {
    return(
        <>
        <h2>Ola!</h2>
        <Login rutaDestino="/privado/"/>
        <p>Esta é a páxina princial desta aplicación de probas de autorización con React.</p>
        <p>Esta páxina é pública e podese ver sen iniciar sesión</p>
        </>
    )
}

export default Principal