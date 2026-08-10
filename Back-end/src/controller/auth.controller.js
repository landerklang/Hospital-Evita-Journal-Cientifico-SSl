// src/controllers/auth.controller.js
const bcrypt = require("bcrypt");
const Usuario = require("../models/Usuario");

const register = async (req, res) => {
  try {
    const { nombre, apellido, email, password, rol } = req.body;

    // 1. Validar que lleguen los campos obligatorios
    if (!nombre || !apellido || !email || !password) {
      return res
        .status(400)
        .json({
          error:
            "Faltan campos obligatorios (nombre, apellido, email, password)",
        });
    }

    // 2. Verificar si el email ya está registrado
    const existe = await Usuario.findOne({ where: { email } });
    if (existe) {
      return res.status(400).json({ error: "El email ya está registrado" });
    }

    // 3. Encriptar la contraseña (10 rondas de salt)
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // 4. Crear el usuario en la base de datos
    const nuevoUsuario = await Usuario.create({
      nombre,
      apellido,
      email,
      password: passwordHash,
      rol: rol || "Autor", // Si no mandan rol, se guarda como "Autor"
      activo: true,
    });

    // 5. Responder sin enviar la contraseña (por seguridad)
    res.status(201).json({
      mensaje: "Usuario creado exitosamente",
      usuario: {
        id: nuevoUsuario.id,
        nombre: nuevoUsuario.nombre,
        apellido: nuevoUsuario.apellido,
        email: nuevoUsuario.email,
        rol: nuevoUsuario.rol,
      },
    });
  } catch (error) {
    console.error("Error en registro:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = { register };
