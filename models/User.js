// models/User.js
import { DataTypes } from "sequelize";

export default (sequelize) => {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("admin", "author", "ddi", "reviewer", "publisher"),
      defaultValue: "author",
    },
    specialtyId: {
      type: DataTypes.INTEGER,
      allowNull: true, // solo para revisores
    },
  });

  return User;
};