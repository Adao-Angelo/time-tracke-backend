import { Router } from "express";
import { autenticationUserController } from "../modules/User/controllers/authentication";

const autheticationRouter = Router();
autheticationRouter.post("/", async (request, response) => {
  await autenticationUserController.handle(request, response);
});

export { autheticationRouter };
