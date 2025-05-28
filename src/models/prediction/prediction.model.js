import { DataTypes } from "sequelize";

const PredictionModel = (sq) => {
  sq.define(
    "Prediction",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      predictionDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },

      predictedValues: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      rangeUsed: {
        type: DataTypes.JSON,
        allowNull: false,
      },

      ProductId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Products",
          key: "id",
        },
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

export default PredictionModel;
