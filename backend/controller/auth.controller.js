// src/controllers/auth.controller.js

import { User } from "../models/index.js"; // ← Importás el modelo User
import { comparePassword, hashPassword } from "../helper/bcrypt.helper.js";
import { generateToken } from "../helper/jwt.herlper.js";

export const register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const hashedPassword = await hashPassword(password);

    // Crear usuario
    const nuevoUsuario = await User.create({
      username,
      email,
      password: hashedPassword,
      role: role || "author",
    });

    res.status(201).json({
      mensaje: "Usuario creado exitosamente",
      usuario: {
        id: nuevoUsuario.id,
        username: nuevoUsuario.username,
        email: nuevoUsuario.email,
        role: nuevoUsuario.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email y contraseña requeridos" });
    }

    const usuario = await User.findOne({ where: { email } });
    if (!usuario) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const passwordValida = await comparePassword(password, User.password);
    if (!passwordValida) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const token = jwt.sign(
      { id: usuario.id, email: usuario.email, role: usuario.role },
      process.env.JWT_SECRET,
      { expiresIn: "8h" },
    );

    res.json({
      mensaje: "Inicio de sesión exitoso",
      token,
      usuario: {
        id: usuario.id,
        username: usuario.username,
        email: usuario.email,
        role: usuario.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno" });
  }
};
