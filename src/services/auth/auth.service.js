import { User } from "../../db/db.js";
import { bcryptHelper } from "../../helpers/index.helpers.js";

const login = async (email, password) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    return { code: 401, message: "Credenciales incorrectas" };
  }

  if (!user.isActive) {
    return {
      code: 401,
      message:
        "La cuenta del usuario se encuentra inactiva. Por favor, contacte al administrador",
    };
  }

  const isValid = await bcryptHelper.comparePassword(password, user.password);

  if (!isValid) {
    return { code: 401, message: "Credenciales incorrectas" };
  }

  return { code: 200, message: "Login exitoso", user: user.dataValues };
};

export default {
  login,
};
