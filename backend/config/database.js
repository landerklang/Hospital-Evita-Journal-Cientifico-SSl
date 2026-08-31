// config/database.js
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// Cambiamos la configuración para que apunte a MySQL
export const sequelize = new Sequelize(
  process.env.DB_NAME || 'evita_journal_database', // Nombre de la base de datos
  process.env.DB_USER || 'root',                  // Usuario (por defecto en XAMPP es root)
  process.env.DB_PASSWORD || '',                  // Contraseña (por defecto en XAMPP está vacía)
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',                             // ¡Cambio vital!
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