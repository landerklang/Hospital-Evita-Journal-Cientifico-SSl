import { DataTypes } from "sequelize";

export default (sequelize) => {
  const ConvocationModel = sequelize.define("convocation", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  });

  ConvocationModel.associate = (models) => {
    ConvocationModel.hasMany(models.Article, { foreignKey: "convocationId" });
  }; 
  
  return ConvocationModel;
};