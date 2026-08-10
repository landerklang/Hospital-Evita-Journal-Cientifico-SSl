// src/models/Usuario.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Usuario = sequelize.define(
  "Usuario",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true, // No puede haber dos usuarios con el mismo email
      validate: {
        isEmail: true, // Validación básica de formato email
      },
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    rol: {
      type: DataTypes.ENUM(
        "Administrador",
        "DepartamentoDocencia",
        "MiembroComite",
        "EncargadoPublicacion",
        "Autor",
      ),
      defaultValue: "Autor", // Por defecto, si no se especifica, es Autor
      allowNull: false,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true, // true = cuenta habilitada, false = deshabilitada
    },
  },
  {
    tableName: "usuarios",
    timestamps: true, // Crea automáticamente createdAt y updatedAt
  },
);

module.exports = Usuario;
