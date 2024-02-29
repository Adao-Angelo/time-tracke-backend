import { Request, Response } from "express";
import deleteTaskUseCase, { DeleteTaskUseCase } from "./deleteTaskUseCase";

class DeleteTaskController {
  constructor(private listTaskUseCase: DeleteTaskUseCase) {}
  async hanble(request: Request, response: Response) {
    const { id } = request.body;
    const tasks = await deleteTaskUseCase.execute(id);
    return response.json(tasks).status(202);
  }
}

export default new DeleteTaskController(deleteTaskUseCase);
