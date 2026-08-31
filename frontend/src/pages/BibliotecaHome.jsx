import { Search, BookOpen, Download, FileText, Filter } from 'lucide-react';

export default function BibliotecaHome() {
  // Datos "mock" de la biblioteca
  const recursos = [
    { id: 1, titulo: 'Protocolo de Actuación: Dengue 2026', categoria: 'Infectología', tipo: 'PDF', tamaño: '2.4 MB' },
    { id: 2, titulo: 'Guía Clínica de Hipertensión Arterial', categoria: 'Cardiología', tipo: 'PDF', tamaño: '5.1 MB' },
    { id: 3, titulo: 'Manual de Procedimientos de Enfermería', categoria: 'Enfermería', tipo: 'PDF', tamaño: '12.0 MB' },
    { id: 4, titulo: 'Uso Racional de Antibióticos', categoria: 'Farmacia', tipo: 'PDF', tamaño: '1.8 MB' },
  ];

  return (
    <div className="space-y-6">
      {/* Encabezado y Buscador */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Biblioteca Virtual</h1>
        <p className="text-gray-500 mb-6">Busca protocolos, guías clínicas y material bibliográfico del hospital.</p>
        
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Buscar por título, palabra clave o especialidad..." 
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
          </div>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors">
            <Filter size={20} />
            Filtros
          </button>
        </div>
      </div>

      {/* Categorías Rápidas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {['Urgencias', 'Clínica Médica', 'Cirugía', 'Enfermería'].map((cat, i) => (
          <button key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center gap-2 hover:border-blue-500 hover:text-blue-600 transition-colors text-gray-600">
            <BookOpen size={24} />
            <span className="font-medium">{cat}</span>
          </button>
        ))}
      </div>

      {/* Lista de Recursos Recientes */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800">Agregados Recientemente</h2>
        </div>
        
        <div className="divide-y divide-gray-100">
          {recursos.map((recurso) => (
            <div key={recurso.id} className="p-4 hover:bg-gray-50 flex items-center justify-between transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-red-50 text-red-500 rounded-lg">
                  <FileText size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{recurso.titulo}</h4>
                  <p className="text-sm text-gray-500">{recurso.categoria} • {recurso.tamaño}</p>
                </div>
              </div>
              <button className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-colors flex items-center gap-2">
                <Download size={20} />
                <span className="text-sm font-medium hidden md:inline">Descargar</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}