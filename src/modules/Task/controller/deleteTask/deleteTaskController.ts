import { Request, Response } from "express";
import deleteTaskUseCase, { DeleteTaskUseCase } from "./deleteTaskUseCase";

class DeleteTaskController {
  constructor(private listTaskUseCase: DeleteTaskUseCase) {}
  async hanble(request: Request, response: Response) {
    const id = request.params.id;
    const tasks = await deleteTaskUseCase.execute(id);
    return response.json({ message: "sucess" }).status(202);
  }
}

export default new DeleteTaskController(deleteTaskUseCase);
