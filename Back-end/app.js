// src/app.js
import "dotenv/config";
const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares globales
app.use(cors()); // Permite peticiones desde React (frontend)
app.use(express.json()); // Hace que Express entienda JSON en las peticiones

// Ruta de prueba rápida (para saber que el servidor anda)
app.get("/api/health", (req, res) => {
  res.status(200).json({ mensaje: "Servidor funcionando correctamente" });
});

// AQUÍ DESPUÉS VAMOS A IMPORTAR LAS RUTAS DE USUARIOS
// const authRoutes = require('./routes/auth.routes');
// app.use('/api/auth', authRoutes);

module.exports = app;
