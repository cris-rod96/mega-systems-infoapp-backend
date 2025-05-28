import server from "./src/app.js";
import { envs } from "./src/config/index.config.js";
import { connection } from "./src/db/db.js";

connection
  .sync({
    logging: false,
    force: true,
    alter: true,
  })
  .then(() => {
    server.listen(envs.PORT, () => {
      console.log(`Servidor corriendo en el puerto ${envs.PORT}`);
    });
    console.log("Base de datos conectada correctamente");
  })
  .catch((err) => {
    console.log(`Error al sincronizar la base de datos: ${err}`);
  });
