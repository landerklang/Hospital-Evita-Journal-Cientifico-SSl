// src/routes/auth.routes.js
const express = require("express");
const { register } = require("../controllers/auth.controller");

const router = express.Router();

// Ruta POST para registrar un nuevo usuario
// Ejemplo: http://localhost:5000/api/auth/register
router.post("/register", register);

module.exports = router;
