// config/database.js
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: process.env.DB_STORAGE || "database.sqlite",
  logging: false,  
});

export const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión a la base de datos establecida correctamente.");
    // Sincroniza todos los modelos (los importaremos más adelante)
    await sequelize.sync({ alter: true }); // alter actualiza tablas sin borrar datos
    console.log("✅ Modelos sincronizados.");
  } catch (error) {
    console.error("❌ Error al conectar/sincronizar la base de datos:", error);
    process.exit(1);
  }
};