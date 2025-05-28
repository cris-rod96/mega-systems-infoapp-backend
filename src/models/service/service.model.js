import { DataTypes } from "sequelize";

const ServiceModel = (sq) => {
  sq.define(
    "Service",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      CategoryId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Categories",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
    }
  );
};

export default ServiceModel;
