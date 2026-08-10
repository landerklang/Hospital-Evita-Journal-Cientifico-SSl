import { DataTypes } from "sequelize";

export default (sequelize) => {
  const ReviewModel = sequelize.define("review", {
    verdict: {
      type: DataTypes.ENUM("Aceptar", "Aceptar con correcciones", "Rechazar"),
      allowNull: false,
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    review_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }
    // assignmentId y versionId se crean en index.js
  });

  return ReviewModel;
};