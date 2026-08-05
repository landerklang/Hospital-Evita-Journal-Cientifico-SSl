// models/Specialty.js
import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Specialty = sequelize.define("Specialty", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  return Specialty;
};