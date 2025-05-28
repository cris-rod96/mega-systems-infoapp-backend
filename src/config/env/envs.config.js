import "dotenv/config";

const { PORT = 3000, DEV_DB } = process.env;

export default { PORT, DEV_DB };
