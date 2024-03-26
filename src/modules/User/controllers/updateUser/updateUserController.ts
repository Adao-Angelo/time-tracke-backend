import { Request, Response } from "express";
import { UpdateUserUseCase } from "./updateUserUseCase";
import updateUserUseCase from "./updateUserUseCase";

class DeleteUserControlller {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}
  async randle(request: Request, response: Response) {
    const { id, name, email, password } = request.body;
    await this.updateUserUseCase.execute({ id, name, email, password });
    return response.json({ message: "sucess" }).status(202);
  }
}

export default new DeleteUserControlller(updateUserUseCase);
