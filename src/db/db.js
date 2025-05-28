import { Sequelize } from "sequelize";
import { libs } from "../config/index.config.js";
import { models } from "../models/index.models.js";

const connection = new Sequelize(libs.DB_CONFIG.URI, libs.DB_CONFIG.OPTIONS);

models.forEach((model) => model(connection));

export { connection };
