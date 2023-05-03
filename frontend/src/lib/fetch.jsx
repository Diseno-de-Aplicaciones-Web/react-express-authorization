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

export {
    obtenerPase
}