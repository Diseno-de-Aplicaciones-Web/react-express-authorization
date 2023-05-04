<script>
    
    import { navigate } from "svelte-routing";
    import { paseAutorizacion, pecharSesion } from "../servicios/servizoAutorizacion.mjs"

    export let rutaDestino = null

    function manexadorBoton() {
        pecharSesion()
        navigate(rutaDestino ?? "/")
    }

</script>

{#if $paseAutorizacion}
    <button class="boton" on:click={manexadorBoton}>Pechar sesion</button>
{/if}
