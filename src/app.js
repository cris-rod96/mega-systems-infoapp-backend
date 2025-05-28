import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const server = express();
server.use(cors());
server.use(json({ limit: "50mb" }));
server.use(cookieParser());

export default server;
