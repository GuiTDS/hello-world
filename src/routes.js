import Menu from "./componentes/Menu";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const pagina = window.location.pathname === '/' ? <Inicio/> : <SobreMim />

function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
