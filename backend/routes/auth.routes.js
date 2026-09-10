import { Router } from "express";
import {
  login,
  logout,
  register,
  verify,
} from "../controller/auth.controller.js";
import { authMiddleware } from "../middleware/auth.js";

export const authRouter = Router();

authRouter.post("/auth/register", register);

authRouter.post("/auth/login", login);

authRouter.post("/auth/logout", logout);

authRouter.post("/auth/verify", authMiddleware, verify);
