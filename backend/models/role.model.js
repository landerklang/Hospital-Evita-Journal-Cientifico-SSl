import { DataTypes } from "sequelize";

export default (sequelize) => {
  const RolModel = sequelize.define("user", {
    name: {
      type: DataTypes.ENUM("admin", "author", "ddi", "reviewer", "publisher"),
      defaultValue: "author",
    },
  });

  RolModel.associate = (models) => {
    RolModel.hasMany(models.User, { foreignKey: "roleId" });
  };

  return RolModel;
};
