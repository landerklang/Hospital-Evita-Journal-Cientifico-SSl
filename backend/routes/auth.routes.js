import { Router } from "express";
import { login, register } from "../controller/auth.controller.js";

export const authRouter = Router();

authRouter.post("/auth/register", register);

authRouter.post("/auth/login", login);
