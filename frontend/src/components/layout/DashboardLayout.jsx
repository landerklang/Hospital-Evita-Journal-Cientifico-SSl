import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function DashboardLayout({ user }) {
  return (
    // Contenedor principal que ocupa toda la pantalla (100vh) sin hacer scroll general
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      
      {/* Menú Lateral Fijo (El que tú armaste) */}
      <Sidebar user={user} />
      
      {/* Columna Derecha (Navbar + Contenido) */}
      <div className="flex flex-col flex-1 overflow-hidden">
        
        <Navbar user={user} />
        
        {/* Área donde se inyectan las pantallas (Mis Artículos, Revisiones, etc.) */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          
          {/* El componente Outlet de React Router es el "hueco" dinámico */}
          <Outlet />
          
        </main>
      </div>
    </div>
  );
}