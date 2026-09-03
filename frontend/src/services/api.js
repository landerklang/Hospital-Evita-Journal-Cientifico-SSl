import axios from 'axios';

// Creamos una instancia centralizada de Axios
const api = axios.create({
  // URL base donde corre el servidor de Node.js que configuramos antes
  baseURL: 'http://localhost:3000/api', 
  timeout: 10000, // Corta la petición si tarda más de 10 segundos
});

// El "Interceptor" de peticiones
// Esto se ejecuta JUSTO ANTES de que cualquier petición salga de React hacia Node.js
api.interceptors.request.use(
  (config) => {
    // TODO: Descomentar esto cuando Lautaro termine el Login
    /*
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    */
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;