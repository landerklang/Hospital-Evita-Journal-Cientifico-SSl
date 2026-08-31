import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';

// Componentes "Fantasma" temporales para probar la navegación
const DashboardHome = () => <h1 className="text-2xl font-bold">Bienvenido al Journal</h1>;
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
          
          {/* Rutas accesibles por todos (Autor, Comité, Admin) */}
          <Route path="mis-articulos" element={<MisArticulos />} />
          
          {/* Rutas protegidas (Solo Comité y Admin) */}
          {(user.role === 'COMITE' || user.role === 'ADMIN') && (
            <Route path="revisiones" element={<Revisiones />} />
          )}

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;