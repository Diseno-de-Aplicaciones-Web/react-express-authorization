const urlBase = window.location.hostname === "localhost" ? "http://localhost:8000/api/v1.0/" : ""

async function obtenerPase(nomeDeUsuario, contrasinal, manejador) {
    const respuesta = await fetch(urlBase+"sesion/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
            {
                nomeDeUsuario,
                contrasinal
            }
        )
    })
    manejador( respuesta.ok ? await respuesta.text() : false )
}

async function enviarPerfil(objetoPerfil, jwt, manejador) {
    const respuesta = await fetch(urlBase+"usuarios/perfiles/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: "Bearer "+jwt
        },
        body: JSON.stringify(objetoPerfil)
    })
    manejador( respuesta.ok ? await respuesta.json() : false )
}

export {
    obtenerPase,
    enviarPerfil
}