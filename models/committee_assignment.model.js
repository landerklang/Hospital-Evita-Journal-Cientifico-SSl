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

  return CommitteeAssignmentModel;
};