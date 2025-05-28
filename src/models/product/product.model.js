import { DataTypes } from "sequelize";
import { brands } from "../../data/data.js";

const ProductModel = (sq) => {
  sq.define(
    "Product",
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

      code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },

      brand: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: brands,
      },

      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      specifications: {
        type: DataTypes.JSON,
        allowNull: false,
      },

      monthGuarantee: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
        },
      },

      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
        },
      },

      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },

      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
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

export default ProductModel;
