import { Link } from 'react-router-dom';
import { Home, FileText, ClipboardCheck, LogOut } from 'lucide-react'; // Íconos
import { Library } from 'lucide-react';

export default function Sidebar({ user }) {
  if (!user) return null;

  return (
    <aside style={{ width: '250px', backgroundColor: '#003366', color: 'white', height: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Perfil */}
      <div style={{ padding: '20px', borderBottom: '1px solid #0055A4' }}>
        <h2 style={{ margin: 0, fontSize: '1.2rem' }}>{user.username}</h2>
        <p style={{ margin: 0, fontSize: '0.8rem', color: '#A0C4FF' }}>Rol: {user.role}</p>
      </div>

      {/* Navegación Dinámica */}
      <nav style={{ flex: 1, padding: '10px 0' }}>
        <Link to="/" style={{ display: 'flex', gap: '10px', padding: '15px 20px', color: 'white', textDecoration: 'none' }}>
          <Home size={20} /> Inicio
        </Link>

        {(user.role === 'AUTOR' || user.role === 'COMITE' || user.role === 'ADMIN') && (
          <Link to="/mis-articulos" style={{ display: 'flex', gap: '10px', padding: '15px 20px', color: 'white', textDecoration: 'none' }}>
            <FileText size={20} /> Mis Artículos
          </Link>
        )}

        {(user.role === 'COMITE' || user.role === 'ADMIN') && (
          <Link to="/revisiones" style={{ display: 'flex', gap: '10px', padding: '15px 20px', color: 'white', textDecoration: 'none' }}>
            <ClipboardCheck size={20} /> Revisiones Pendientes
          </Link>
        )}

        <Link to="/biblioteca" style={{ display: 'flex', gap: '10px', padding: '15px 20px', color: 'white', textDecoration: 'none' }}>
          <Library size={20} /> Biblioteca Virtual
        </Link>
      </nav>

      {/* Botón de Salir (Abajo de todo) */}
      <div style={{ padding: '20px', borderTop: '1px solid #0055A4' }}>
        <button style={{ background: 'none', border: 'none', color: '#ff4d4d', display: 'flex', gap: '10px', cursor: 'pointer', width: '100%' }}>
          <LogOut size={20} /> Cerrar Sesión
        </button>
      </div>
    </aside>
  );
}