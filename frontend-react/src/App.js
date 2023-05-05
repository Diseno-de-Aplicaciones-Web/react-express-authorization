import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Principal from "./vistas/Principal";
import Privado from "./vistas/Privado";
import { ProveedorAutorizacion } from "./servicios/Autorizacion";

function App() {
  return (
    <ProveedorAutorizacion>
      <h1>Exemplo autorizacion con React</h1>
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
    </ProveedorAutorizacion>
  );
}

export default App;
