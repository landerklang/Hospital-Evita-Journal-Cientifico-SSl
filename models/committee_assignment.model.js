import { DataTypes } from "sequelize";

export default (sequelize) => {
  const CommitteeAssignmentModel = sequelize.define("committee_assignment", {
    assignment_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    read_status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false, // Para saber si el revisor ya abrió el documento
    }
    // reviewerId y articleId se crean en index.js
  });
  
  CommitteeAssignmentModel.associate = (models) => {
    CommitteeAssignmentModel.belongsTo(models.User, { foreignKey: "reviewerId", as: "reviewer" });
    CommitteeAssignmentModel.belongsTo(models.Article, { foreignKey: "articleId" });
    CommitteeAssignmentModel.hasMany(models.Review, { foreignKey: "assignmentId", as: "reviews" });
  };

  return CommitteeAssignmentModel;
};