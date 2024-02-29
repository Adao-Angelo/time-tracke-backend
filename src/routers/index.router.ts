import Router from "express";
import { userRouter } from "./user.router";
import { taskRouter } from "./Task.router";
const router = Router();

router.use("/users", userRouter);
router.use("/tasks", taskRouter);

export { router };
