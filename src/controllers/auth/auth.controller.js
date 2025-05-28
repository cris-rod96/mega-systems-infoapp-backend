import { jwtHelper } from "../../helpers/index.helpers.js";
import { authService } from "../../services/index.services.js";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { code, message, user } = await authService.login(email, password);

    if (code === 200) {
      // Generar token
      const { password: _, ...userData } = user;
      const token = jwtHelper.generateToken({
        id: user.id,
        role: user.role,
        dni: user.dni,
      });

      return res.status(code).json({ message, token, user: userData });
    }

    res.status(code).json({ message });
  } catch (error) {
    res.status(500).json({ message: "Error al iniciar sesión: ", error });
  }
};

export default {
  login,
};
