<script>

    import { aDataURL } from "./../ficheros.mjs"
    import { enviarPerfil, recuperarPerfil } from "../fetch.mjs";
    import { paseAutorizacion } from "../servicios/servizoAutorizacion.mjs";
    import { onMount } from "svelte";

    let fichero, nome, telefono, correoElectronico

    async function manexadorFichero(evento) {
        const ficheroSeleccionado = evento.target.files[0]
        fichero = await aDataURL(ficheroSeleccionado)
    }

    function manexadorEnviar() {
        const perfil = {
            nome,
            telefono,
            correoElectronico,
            fichero
        }
        enviarPerfil(perfil, $paseAutorizacion, manejadorResultadoEnvio)
    }

    function manejadorResultadoEnvio(datos) {
        if ( datos === false ) alert("No ha sido posible guardar el perfil")
    }

    function obtenerDatosPerfil(){
        recuperarPerfil($paseAutorizacion, rellenarDatosPerfil)
    }

    function rellenarDatosPerfil(datosPerfil) {
        if (datosPerfil) {
            nome = datosPerfil.nome
            telefono = datosPerfil.telefono
            correoElectronico = datosPerfil.correoElectronico
            fichero = datosPerfil.fotoDePerfil.datos
        }
    }

    onMount(obtenerDatosPerfil)

</script>

<div class="centrado contenedor">
    <div class="contenedor">
        <img class="imagen" src={fichero} alt="Imagen de perfil." />
        <label>
            Nombre
            <input class="bloque" type="text" bind:value={nome}/>
        </label>
        <label>
            Teléfono
            <input class="bloque" type="tel" bind:value={telefono}/>
        </label>
        <label>
            Correo
            <input class="bloque" type="email" bind:value={correoElectronico}/>
        </label>
        <label>
            Imagen de perfil
            <input class="bloque" type="file" on:input={manexadorFichero}/>
        </label>
        <button on:click={manexadorEnviar}>Guardar</button>
    </div>
</div>

<style>
.contenedor {
    position: relative;
}

.bloque {
    display: block;
}

.centrado {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
}

.imagen{
    position: absolute;
    top: 0px;
    right: 0px;
    max-width: 70px;
    max-height: 70px;
    z-index: -1;
}
</style>