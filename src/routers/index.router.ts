import Router from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./../swagger.json";
import { userRouter } from "./user.router";
import { taskRouter } from "./Task.router";
import { autheticationRouter } from "./auth.router";
const router = Router();

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use("/users", userRouter);
router.use("/tasks", taskRouter);
router.use("/auth", autheticationRouter);

export { router };
