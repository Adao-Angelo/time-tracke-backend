import UserRepository from "../../repository/UserRepository";
import { AutenticationUserController } from "./authenticationController";
import { AutenticationUserUseCase } from "./authenticationUseCase";

const authenticationUseCase = new AutenticationUserUseCase(UserRepository);
const autenticationUserController = new AutenticationUserController(
  authenticationUseCase
);
export { autenticationUserController };
