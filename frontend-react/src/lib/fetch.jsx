const urlBase = window.location.hostname === "localhost" ? "http://localhost:8000/api/v1.0/" : ""

async function obtenerPase(nomeDeUsuario, contrasinal, manexador) {
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
    manexador( respuesta.ok ? await respuesta.text() : false )
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

async function recuperarPerfil(jwt, manejador) {
    const respuesta = await fetch(urlBase+"usuarios/perfiles/",{
        headers: {
            authorization: "Bearer "+jwt
        },
    })
    manejador( respuesta.ok ? await respuesta.json() : false )
}

export {
    obtenerPase,
    enviarPerfil,
    recuperarPerfil
}