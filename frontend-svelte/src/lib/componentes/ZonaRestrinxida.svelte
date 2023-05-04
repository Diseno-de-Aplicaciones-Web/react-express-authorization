<script>
    import { paseAutorizacion } from "../servicios/servizoAutorizacion.mjs"
    import Login from "./Login.svelte";
</script>

{#if $paseAutorizacion}
<slot/>
{:else}
<Login/>
{/if}
