import { DataTypes } from "sequelize";
import { reportFormats, reportTypes } from "../../data/data.js";

const ReportModel = (sq) => {
  sq.define(
    "Report",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      reportType: {
        type: DataTypes.ENUM,
        values: reportTypes,
        allowNull: false,
      },

      reportFormat: {
        type: DataTypes.ENUM,
        values: reportFormats,
        allowNull: false,
      },

      exportedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },

      params: {
        type: DataTypes.JSON,
        allowNull: false,
      },

      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
    }
  );
};

export default ReportModel;
