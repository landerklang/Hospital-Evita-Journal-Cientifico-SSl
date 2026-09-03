import { Clock, CheckCircle, BellRing, Users } from 'lucide-react';

export default function DashboardHome() {
  // Datos "mock" temporales. Cuando Lautaro termine el backend, 
  // esto vendrá de un fetch() a tu API.
  const stats = [
    { titulo: 'Artículos en Revisión', valor: '12', icono: Clock, color: 'text-yellow-600', bg: 'bg-yellow-100' },
    { titulo: 'Publicados este mes', valor: '5', icono: CheckCircle, color: 'text-green-600', bg: 'bg-green-100' },
    { titulo: 'Convocatorias Activas', valor: '2', icono: BellRing, color: 'text-blue-600', bg: 'bg-blue-100' },
    { titulo: 'Autores Registrados', valor: '48', icono: Users, color: 'text-purple-600', bg: 'bg-purple-100' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Panel de Control</h1>
        <p className="text-gray-500">Resumen de actividad del Journal Científico</p>
      </div>
      
      {/* Grid de Tarjetas de Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex items-center gap-4 transition-transform hover:-translate-y-1">
            <div className={`p-3 rounded-lg ${stat.bg} ${stat.color}`}>
              <stat.icono size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.titulo}</p>
              <h3 className="text-2xl font-bold text-gray-800">{stat.valor}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Sección de Actividad Reciente */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mt-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Convocatorias Recientes</h2>
        
        {/* Un banner de ejemplo simulando una convocatoria abierta */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md flex justify-between items-center">
          <div>
            <h4 className="font-semibold text-blue-900">Edición Especial: Innovaciones 2026</h4>
            <p className="text-sm text-blue-700">Se aceptan manuscritos hasta el 30 de Noviembre.</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
            Ver Detalles
          </button>
        </div>
      </div>
    </div>
  );
}