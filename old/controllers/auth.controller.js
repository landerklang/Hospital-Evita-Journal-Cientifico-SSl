import { User } from "../models/index.js";
import { hashPassword } from "../helpers/bcrypt.helper.js";

export const registerUser = async (req, res) => {
  try {
    // 1. Extraemos los datos que vienen del formulario (req.body)
    const { username, email, password, role, specialtyId } = req.body;

    // 2. Validación básica de prueba
    if (!username || !email || !password) {
      return res.status(400).json({ error: "Faltan campos obligatorios." });
    }

    // 3. Encriptamos la contraseña usando TU helper ANTES de tocar la base de datos
    const hashedPassword = await hashPassword(password);

    // 4. Creamos el usuario en la base de datos con la contraseña ya segura
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      role: role || "author", // Por defecto será autor si no se envía rol
      specialtyId: specialtyId || null
    });

    // 5. Enviamos una respuesta de éxito (quitamos el password por seguridad)
    const userResponse = newUser.toJSON();
    delete userResponse.password;

    res.status(201).json({
      message: "Usuario registrado con éxito",
      user: userResponse
    });

  } catch (error) {
    console.error("Error en el registro:", error);
    res.status(500).json({ error: "Hubo un error al registrar el usuario." });
  }
};