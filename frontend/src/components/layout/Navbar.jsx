import { Bell, UserCircle } from 'lucide-react';

export default function Navbar({ user }) {
  if (!user) return null;

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 h-16 flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold text-gray-800">
        Journal Científico - Hospital Evita
      </h1>
      
      <div className="flex items-center gap-4">
        {/* Botón de Notificaciones */}
        <button className="text-gray-500 hover:text-blue-800 transition-colors relative">
          <Bell size={24} />
          {/* Un puntito rojo simulando una notificación nueva */}
          <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        {/* Perfil de Usuario */}
        <div className="flex items-center gap-2 border-l pl-4 border-gray-300">
          <UserCircle size={28} className="text-gray-400" />
          <span className="font-medium text-gray-700">{user.username}</span>
        </div>
      </div>
    </header>
  );
}