import { Sequelize, DataTypes } from "sequelize";
import { statusSales } from "../../data/data.js";

const SaleModel = (sq) => {
  sq.define(
    "Sale",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [6, 6],
        },
      },

      total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },

      status: {
        type: DataTypes.ENUM,
        values: statusSales,
        defaultValue: "Pendiente",
      },

      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },

      ClientId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Clients",
          key: "id",
        },
      },

      VendorId: {
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

export default SaleModel;
