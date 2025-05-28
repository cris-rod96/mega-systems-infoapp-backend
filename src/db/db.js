import { Sequelize } from "sequelize";
import { libs } from "../config/index.config.js";

const connection = new Sequelize(libs.DB_CONFIG.URI, libs.DB_CONFIG.OPTIONS);

export { connection };
