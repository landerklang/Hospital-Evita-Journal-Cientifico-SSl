// models/speciality.model.js
import { DataTypes } from "sequelize";

export default (sequelize) => {
  const SpecialtyModel = sequelize.define("specialty", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  });

  return SpecialtyModel;
};