// models/user.model.js
import { DataTypes } from "sequelize";

export default (sequelize) => {
  const UserModel = sequelize.define("user", {
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
  });

  return UserModel;
};