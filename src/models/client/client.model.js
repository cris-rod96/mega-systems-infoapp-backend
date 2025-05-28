import { DataTypes } from "sequelize";

const ClientModel = (sq) => {
  sq.define(
    "Client",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      dni: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [10, 10],
        },
      },

      phone: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
          len: [10, 10],
        },
      },

      email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
          isEmail: true,
        },
      },

      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      registerAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamps: false,
    }
  );
};

export default ClientModel;
