<script>
    import { paseAutorizacion } from "../servicios/servizoAutorizacion.mjs";
    import Dialogo from "./Dialogo.svelte";
    import Login from "./Login.svelte";

    export let rutaDestino = null
    let mostrarLogin = false

    function abrirDialogo() {
        mostrarLogin = true
    }

</script>

{#if ! $paseAutorizacion}
<button on:click={abrirDialogo} disabled={mostrarLogin}>Login</button>
<Dialogo bind:abierto={mostrarLogin}>
    <Login rutaDestino={rutaDestino}/>
</Dialogo>
{/if}
