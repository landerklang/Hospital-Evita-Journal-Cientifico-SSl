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
    const usuario = await User.findOne({ where: { email } });
    if (!usuario) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const passwordValida = await comparePassword(password, usuario.password);
    if (!passwordValida) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const token = await generateToken({
      id: usuario.id,
      username: usuario.username,
      email: usuario.email,
      role: usuario.role,
    });

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60,
    });
    res.status(200).json({
      mensaje: "Inicio de sesión exitoso",
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
