import { Sequelize } from "sequelize";
import { libs } from "../config/index.config.js";
import { models } from "../models/index.models.js";

const connection = new Sequelize(libs.DB_CONFIG.URI, libs.DB_CONFIG.OPTIONS);

models.forEach((model) => model(connection));

const {
  Alert,
  Bill,
  Category,
  Client,
  Company,
  History,
  Prediction,
  Product,
  Report,
  Sale,
  SaleDetail,
  User,
} = connection.models;

Product.hasMany(Alert, { foreignKey: "ProductId" });
Alert.belongsTo(Product, { foreignKey: "ProductId" });

User.hasMany(Alert, { foreignKey: "UserCreatorId", as: "CreatedAlerts" });
Alert.belongsTo(User, { foreignKey: "UserCreatorId", as: "Creator" });

User.hasMany(Alert, { foreignKey: "UserReceiverId", as: "ReceivedAlerts" });
Alert.belongsTo(User, { foreignKey: "UserReceiverId", as: "Receiver" });

Sale.hasOne(Bill, { foreignKey: "SaleId" });
Bill.belongsTo(Sale, { foreignKey: "SaleId" });

Category.hasMany(Product, { foreignKey: "CategoryId" });
Product.belongsTo(Category, { foreignKey: "CategoryId" });

User.hasMany(History, { foreignKey: "UserId" });
History.belongsTo(User, { foreignKey: "UserId" });

Product.hasMany(Prediction, { foreignKey: "ProductId" });
Prediction.belongsTo(Product, { foreignKey: "ProductId" });

User.hasMany(Report, { foreignKey: "UserId" });
Report.belongsTo(User, { foreignKey: "UserId" });

Client.hasMany(Sale, { foreignKey: "ClientId" });
Sale.belongsTo(Client, { foreignKey: "ClientId" });

User.hasMany(Sale, { foreignKey: "VendorId" });
Sale.belongsTo(User, { foreignKey: "VendorId" });

Sale.hasMany(SaleDetail, { foreignKey: "SaleId" });
SaleDetail.belongsTo(Sale, { foreignKey: "SaleId" });

export {
  connection,
  Alert,
  Bill,
  Category,
  Client,
  Company,
  History,
  Prediction,
  Product,
  Report,
  Sale,
  SaleDetail,
  User,
};
