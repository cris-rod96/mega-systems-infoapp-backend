import { DataTypes } from "sequelize";
import { identificationTypes } from "../../data/data.js";

const BillModel = (sq) => {
  sq.define(
    "Bill",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      clientIdentification: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      identificationType: {
        type: DataTypes.ENUM,
        values: identificationTypes,
        allowNull: false,
      },

      clientName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      subTotal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },

      iva: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },

      total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },

      SaleId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Sales",
          key: "id",
        },
      },

      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },

      docUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
};

export default BillModel;
