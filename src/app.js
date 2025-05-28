import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import rootRouters from "./routes/index.routes.js";

const server = express();
server.use(cors());
server.use(json({ limit: "50mb" }));
server.use(cookieParser());

// rutas
server.use("/api/v1", rootRouters);

export default server;
