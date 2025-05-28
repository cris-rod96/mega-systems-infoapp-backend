import "dotenv/config";

const { PORT = 3000, DEV_DB, SECRET_WORD } = process.env;

export default { PORT, DEV_DB, SECRET_WORD };
