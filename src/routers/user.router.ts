import Router from "express";
import createUserController from "../modules/User/controllers/createUser/createUserController";
import listUserControlller from "../modules/User/controllers/listUsers/listUserControlller";
import deleteUserController from "../modules/User/controllers/deleteUser/deleteUserController";
import updateUserController from "../modules/User/controllers/updateUser/updateUserController";
const userRouter = Router();

userRouter.post("/", async (request, response) => {
  await createUserController.randle(request, response);
});
userRouter.get("/", async (request, response) => {
  await listUserControlller.randle(request, response);
});
userRouter.delete("/", async (request, response) => {
  await deleteUserController.randle(request, response);
});
userRouter.put("/", async (request, response) => {
  await updateUserController.randle(request, response);
});
export { userRouter };
