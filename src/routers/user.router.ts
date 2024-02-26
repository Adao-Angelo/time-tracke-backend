import Router from "express";
import createUserController from "../modules/User/controllers/createUser/createUserController";
import listUserControlller from "../modules/User/controllers/listUsers/listUserControlller";
const userRouter = Router();

userRouter.post("/", async (request, response) => {
  await createUserController.randle(request, response);
});
userRouter.get("/", async (request, response) => {
  await listUserControlller.randle(request, response);
});

export { userRouter };
