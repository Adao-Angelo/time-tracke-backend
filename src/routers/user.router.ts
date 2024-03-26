import Router from "express";
import createUserController from "../modules/User/controllers/createUser/createUserController";
import listUserControlller from "../modules/User/controllers/listUsers/listUserControlller";
import deleteUserController from "../modules/User/controllers/deleteUser/deleteUserController";
import updateUserController from "../modules/User/controllers/updateUser/updateUserController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import uploadConfig from "../config/upload";
import multer from "multer";
import verifyEmail from "../modules/User/Account/verifyEmail";
const userRouter = Router();
const uploadImageProduct = multer({ dest: "uploads/" });
userRouter.post("/", async (request, response) => {
  await createUserController.randle(request, response);
});
userRouter.get(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  async (request, response) => {
    await listUserControlller.randle(request, response);
  }
);
userRouter.delete("/:id", async (request, response) => {
  await deleteUserController.randle(request, response);
});
userRouter.put("/", ensureAuthenticated, async (request, response) => {
  await updateUserController.randle(request, response);
});

userRouter.patch(
  "/avatar/:id",
  ensureAuthenticated,
  uploadImageProduct.single("avatar"),
  async (request, response) => {}
);

userRouter.post("/verify_email", async (request, response) => {
  await verifyEmail.execute(request, response);
});

export { userRouter };
