import { DataTypes } from "sequelize";

const CompanyModel = (sq) => {
  sq.define(
    "Company",
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

      slogan: {
        type: DataTypes.TEXT,
        allowNull: false,
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

      website: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      ruc: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [13, 13],
        },
      },

      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};

export default CompanyModel;
