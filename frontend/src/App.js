import { ProveedorDeContexto } from "./servicios/Contexto";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Principal from "./vistas/Principal";
import Privado from "./vistas/Privado";
import PerfilUsuario from "./componentes/PerfilUsuario";

function App() {
  return (
    <ProveedorDeContexto>
      <h1>Exemplo autorizacion</h1>
      <BrowserRouter>
      <nav>
        <ul>
          <Link to="/"><li>Inicio</li></Link> 
          <Link to="/privado/"><li>Privado</li></Link>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Principal/>}/>
          <Route path="/privado/" element={<Privado/>}/>
        </Routes>
      </main>
      </BrowserRouter>
    </ProveedorDeContexto>
  );
}

export default App;
