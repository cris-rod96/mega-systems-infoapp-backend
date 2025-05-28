import { Router } from "express";
import authRouter from "./auth/auth.route.js";

const rootRouters = Router();

rootRouters.use("/auth", authRouter);

export default rootRouters;
