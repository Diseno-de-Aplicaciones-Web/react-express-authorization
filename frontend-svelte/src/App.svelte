<script>
    import { Router, Link, Route } from "svelte-routing";
    import Principal from "./lib/vistas/Principal.svelte";
    import Privada from "./lib/vistas/Privada.svelte";
</script>

<h1>Autorización en Svelte</h1>
<Router>
  <nav>
    <Link to="/">Inicio</Link>
    <Link to="privado">Área privada</Link>
  </nav>
  <main>
    <Route path="">
      <Principal/>
    </Route>
    <Route path="privado">
      <Privada/>
    </Route>
  </main>
</Router>

<style>
</style>
