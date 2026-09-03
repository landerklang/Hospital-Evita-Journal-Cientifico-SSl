import api from './api';

export const bibliotecaService = {
  
  // Pide la lista de PDFs al backend
  obtenerRecursos: async () => {
    try {
      // Axios automáticamente convierte el JSON de respuesta
      const response = await api.get('/biblioteca');
      return response.data;
    } catch (error) {
      console.error("Error al obtener los recursos de la biblioteca:", error);
      throw error; 
    }
  },

  // Envía un nuevo PDF al backend (para cuando programes el modal)
  subirRecurso: async (formData) => {
    try {
      const response = await api.post('/biblioteca/upload', formData, {
        headers: {
          // Esta cabecera es OBLIGATORIA para enviar archivos físicos (PDFs)
          'Content-Type': 'multipart/form-data', 
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error al subir el documento:", error);
      throw error;
    }
  }
};