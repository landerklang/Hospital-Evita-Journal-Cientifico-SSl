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
  
  UserModel.associate = (models) => {
    UserModel.belongsTo(models.Specialty, { foreignKey: "specialtyId", as: "specialty" });
    UserModel.hasMany(models.Article, { foreignKey: "responsibleId", as: "myArticles" });
    UserModel.hasMany(models.CommitteeAssignment, { foreignKey: "reviewerId", as: "assignments" });
  };

  return UserModel;
};

