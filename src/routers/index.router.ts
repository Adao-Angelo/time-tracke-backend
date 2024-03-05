import Router from "express";
import { userRouter } from "./user.router";
import { taskRouter } from "./Task.router";
import { autheticationRouter } from "./auth.router";
const router = Router();

router.use("/users", userRouter);
router.use("/tasks", taskRouter);
router.use("/auth", autheticationRouter);

export { router };
