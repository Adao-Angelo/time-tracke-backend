import { Router } from "express";
import listTaskUserController from "../modules/Task/controller/listTask/listTaskUserController";
import deleteTaskController from "../modules/Task/controller/deleteTask/deleteTaskController";
import createTaskController from "../modules/Task/controller/createTask/createTaskController";
import updateTaskController from "../modules/Task/controller/updateTask/updateTaskController";
import listTaskByUserIdController from "../modules/Task/controller/listTask/listTaskUserById/listTaskByUserIdController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";

const taskRouter = Router();
taskRouter.use(ensureAuthenticated);

taskRouter.get("/", ensureAdmin, async (request, response) => {
  await listTaskUserController.hanble(request, response);
});
taskRouter.get("/:id", async (request, response) => {
  await listTaskByUserIdController.hanble(request, response);
});
taskRouter.delete("/:id", async (request, response) => {
  await deleteTaskController.hanble(request, response);
});

taskRouter.post("/", async (request, response) => {
  await createTaskController.hanble(request, response);
});
taskRouter.put("/:id", async (request, response) => {
  await updateTaskController.hanble(request, response);
});

export { taskRouter };
