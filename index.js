import server from "./src/app.js";
import { envs } from "./src/config/index.config.js";

server.listen(envs.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${envs.PORT}`);
});
