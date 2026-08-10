// src/app.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Importamos la conexión a la BD y el modelo
const sequelize = require("./config/database");
const Usuario = require("./models/Usuario"); // Aunque no lo usemos directamente, lo cargamos para que Sequelize lo registre

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/api/health", (req, res) => {
  res.status(200).json({ mensaje: "Servidor funcionando correctamente" });
});

// ******* RUTAS DE AUTENTICACIÓN (DESCOMENTADO) *******
const authRoutes = require("./routes/auth.routes");
app.use("/api/auth", authRoutes);

// Sincronizar la base de datos (crea la tabla si no existe)
// force: false -> No borra datos existentes
// force: true -> Borra y recrea las tablas (¡CUIDADO! solo para desarrollo)
sequelize
  .sync({ force: false })
  .then(() => console.log("✅ Base de datos sincronizada correctamente"))
  .catch((err) => console.error("❌ Error al sincronizar DB:", err));

module.exports = app;

app.listen(PORT, () => {
  consola.log("Servidor corriendo en el puerto 5000");
});
