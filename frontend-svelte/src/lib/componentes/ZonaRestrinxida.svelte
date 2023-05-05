<script>
    import { autorizado } from "../servicios/servizoAutorizacion.mjs"
    import Login from "./Login.svelte";
</script>

{#if $autorizado }
<slot/>
{:else}
<Login/>
{/if}