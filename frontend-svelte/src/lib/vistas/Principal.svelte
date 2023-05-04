<script>
    import DialogoLogin from "../componentes/DialogoLogin.svelte";
    import Logout from "../componentes/Logout.svelte";
</script>

<h2>Página principal</h2>

<Logout/>
<DialogoLogin rutaDestino="privado"/>

<p>Esta es la página de inicio de la aplicación.</p>
<p>Este contenido es de acceso público.</p>