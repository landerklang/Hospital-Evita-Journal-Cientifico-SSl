// models/article.model.js MODIFICAR DE A CUERDO

import { DataTypes } from "sequelize";

export default (sequelize) => {
  const ArticleModel = sequelize.define("article", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      // Estados: pendiente, en_revision, correcciones, aprobado, rechazado, publicado
      type: DataTypes.STRING,
      defaultValue: "pendiente",
    }
    // responsibleId, specialtyId, y convocationId se crean en index.js
  });

  ArticleModel.associate = (models) => {
    ArticleModel.belongsTo(models.User, { foreignKey: "responsibleId", as: "author" });
    ArticleModel.belongsTo(models.Specialty, { foreignKey: "specialtyId", as: "specialty" });
    ArticleModel.belongsTo(models.Convocation, { foreignKey: "convocationId", as: "convocation" });
    ArticleModel.hasMany(models.ArticleVersion, { foreignKey: "articleId", as: "versions" });
    ArticleModel.hasMany(models.CommitteeAssignment, { foreignKey: "articleId", as: "assignments" });
  };
  
  return ArticleModel;
};