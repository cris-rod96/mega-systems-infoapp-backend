import jwt from "jsonwebtoken";
import { envs } from "../../config/index.config.js";
const { sign, verify } = jwt;

const generateToken = (payload) => {
  return sign(payload, envs.SECRET_WORD, {
    expiresIn: "1d",
  });
};

export default {
  generateToken,
};
