import { envs } from "../index.config.js";

const DB_CONFIG = {
  URI: envs.DEV_DB,
  OPTIONS: {
    native: false,
    logging: false,
  },
};

export default {
  DB_CONFIG,
};
