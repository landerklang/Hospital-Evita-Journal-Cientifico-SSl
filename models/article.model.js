// models/article.model.js
import { DataTypes } from "sequelize";

export default (sequelize) => {
  const ArticleModel = sequelize.define("article", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      // Estados basados en el flujo: pendiente, en_revision, correcciones, aprobado, rechazado, publicado
      type: DataTypes.STRING,
      defaultValue: "pendiente",
    }
    // responsibleId, specialtyId, y convocationId se crean en index.js
  });

  return ArticleModel;
};