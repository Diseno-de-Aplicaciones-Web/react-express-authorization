<script>
    import { navigate } from "svelte-routing";
    import { gardarPaseAutorizacion, autorizado } from "../servicios/servizoAutorizacion.mjs"
    import { obtenerPase } from "../fetch.mjs"

    export let rutaDestino = null
    let usuario, contrasinal

    function manexadorBotonEnviar() {
        obtenerPase(usuario, contrasinal, verificarResultado)
    }

    async function verificarResultado(pase) {
        if(pase) { 
            gardarPaseAutorizacion(pase)
            if (rutaDestino) navigate(rutaDestino)
        }
        else alert("Usuario o contraseña erroneos")
    }

</script>

{#if ! $autorizado }
<div class="contenedor">
    <label>
        Usuario
        <input class="bloque" type="text" bind:value={usuario} />
    </label>
    <label>
        Contrasinal
        <input class="bloque" type="password" bind:value={contrasinal} />
    </label>
    <button class="boton" on:click={manexadorBotonEnviar}>Login</button>
</div>
{/if}

<style>
.contenedor {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
}

.bloque {
    display: block;
}

.boton {
    margin: 1em
}
</style>