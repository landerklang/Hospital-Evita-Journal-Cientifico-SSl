import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';

// Componentes "Fantasma" temporales para probar la navegación
import DashboardHome from './pages/DashboardHome';
import BibliotecaHome from './pages/BibliotecaHome';
const MisArticulos = () => <h1 className="text-2xl font-bold">Mis Artículos Subidos</h1>;
const Revisiones = () => <h1 className="text-2xl font-bold">Panel de Revisiones del Comité</h1>;

function App() {
  // Mock temporal del usuario (hasta que Lautaro termine el Login)
  const [user, setUser] = useState({
    id: 1,
    username: "Dr. Fernando",
    email: "fernando@hospital.gov.ar",
    role: "COMITE", // Cambia a 'AUTOR' o 'ADMIN' para probar
    specialtyId: 3
  });

return (
    <BrowserRouter>
      <Routes>
        {/* Todas las rutas dentro de DashboardLayout tendrán el menú lateral */}
        <Route path="/" element={<DashboardLayout user={user} />}>
          
          <Route index element={<DashboardHome />} />
          
          {/* --- Módulo de Leandro (Journal) --- */}
          <Route path="mis-articulos" element={<MisArticulos />} />
          
          {(user.role === 'COMITE' || user.role === 'ADMIN') && (
            <Route path="revisiones" element={<Revisiones />} />
          )}

          {/* --- Tu Módulo (Biblioteca) --- */}
          <Route path="biblioteca" element={<BibliotecaHome />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;