import { DataTypes } from "sequelize";

export default (sequelize) => {
  const RoleModel = sequelize.define("role", {
    name: {
      type: DataTypes.ENUM(
        "admin",
        "member",
        "author",
        "board_reviewer",
        "cordinator_DDI",
      ),
      allowNull: false,
      unique: true,
      defaultValue: "member",

      //   DDI:Departamento Docensia Investigacion
    },
  });
  RoleModel.associate = (models) => {
    // Un rol puede estar asignado a muchos usuarios
    RoleModel.hasMany(models.User, {
      foreignKey: "roleId",
      as: "users",
    });
  };
  return RoleModel;
};
