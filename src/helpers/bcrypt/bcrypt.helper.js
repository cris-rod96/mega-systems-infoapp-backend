import bcryptjs from "bcryptjs";

const { hash, compare } = bcryptjs;

const hashPassword = async (password) => {
  return await hash(password, 10);
};

const comparePassword = async (password, hashPassword) => {
  return await compare(password, hashPassword);
};

export default {
  hashPassword,
  comparePassword,
};
