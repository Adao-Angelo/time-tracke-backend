import { Request, Response } from "express";
import { DeleteUserUseCase } from "./deleteUserUseCase";
import deleteUserUseCase from "./deleteUserUseCase";

class DeleteUserControlller {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}
  async randle(request: Request, response: Response) {
    const id = request.params.id;
    await this.deleteUserUseCase.execute(id);
    return response.json({ message: "sucess" }).status(202);
  }
}

export default new DeleteUserControlller(deleteUserUseCase);
