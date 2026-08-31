// config/database.js
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// 1. Validación estricta: Verificamos que las variables obligatorias existan
if (!process.env.DB_NAME || !process.env.DB_USER || !process.env.DB_HOST) {
  console.error("❌ ERROR CRÍTICO: Faltan variables de entorno para la Base de Datos. Revisa tu archivo .env");
  process.exit(1); // Detiene la ejecución de Node.js
}

// 2. Configuración usando EXCLUSIVAMENTE variables de entorno
export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD, // Importante: Si no usan contraseña, debe dejarse vacío en el .env
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,  
  }
);

export const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión a la base de datos MySQL establecida correctamente.");
    
    // Sincroniza todos los modelos
    await sequelize.sync({ alter: true }); 
    console.log("✅ Modelos sincronizados en phpMyAdmin.");
  } catch (error) {
    console.error("❌ Error al conectar/sincronizar la base de datos:", error);
    process.exit(1);
  }
};