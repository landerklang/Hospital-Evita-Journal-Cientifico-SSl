import { useState, useEffect } from 'react';
import { Search, BookOpen, Download, FileText, Filter, AlertCircle, Loader2 } from 'lucide-react';
import { bibliotecaService } from '../services/biblioteca.service';

export default function BibliotecaHome() {
  // 1. Definimos los estados del componente
  const [recursos, setRecursos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // 2. useEffect ejecuta esto al cargar la pantalla
  useEffect(() => {
    const cargarBiblioteca = async () => {
      try {
        setCargando(true);
        // Intentamos llamar a la API real
        const data = await bibliotecaService.obtenerRecursos();
        setRecursos(data.data || data); // Depende de cómo estructuren el JSON final
        setError(null);
      } catch (err) {
        console.error("Fallo la API, cargando fallback...", err);
        setError('No se pudo conectar con el servidor real. Mostrando datos de prueba.');
        
        // Fallback: Datos mock para que puedas seguir diseñando
        setRecursos([
          { id: 1, titulo: 'Protocolo de Actuación: Dengue 2026', categoria: 'Infectología', tipo: 'PDF', tamaño: '2.4 MB' },
          { id: 2, titulo: 'Guía Clínica de Hipertensión Arterial', categoria: 'Cardiología', tipo: 'PDF', tamaño: '5.1 MB' },
          { id: 3, titulo: 'Manual de Procedimientos de Enfermería', categoria: 'Enfermería', tipo: 'PDF', tamaño: '12.0 MB' },
        ]);
      } finally {
        setCargando(false);
      }
    };

    cargarBiblioteca();
  }, []); // El array vacío [] indica que se ejecuta solo una vez al montar

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

      {/* Alerta de Error (Visible solo si falla la API) */}
      {error && (
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded flex items-center gap-3">
          <AlertCircle className="text-orange-500" size={24} />
          <p className="text-sm text-orange-800">{error}</p>
        </div>
      )}

      {/* Estado de Carga vs Lista de Recursos */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Recursos Disponibles</h2>
        </div>
        
        {cargando ? (
          // Spinner de carga mientras espera al servidor
          <div className="p-12 flex justify-center items-center text-gray-400">
            <Loader2 className="animate-spin" size={32} />
          </div>
        ) : (
          // Lista dinámica de PDFs renderizada desde el estado
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
        )}
      </div>
    </div>
  );
}