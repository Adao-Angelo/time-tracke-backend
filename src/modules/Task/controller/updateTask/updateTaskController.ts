import { Request, Response } from "express";
import updateTaskUseCase, { UpdateTaskUseCase } from "./updateTaskUseCase";

class UpdateTaskController {
  constructor(private updateTaskUseCase: UpdateTaskUseCase) {}
  async hanble(request: Request, response: Response) {
    const { title, userId, description } = request.body;
    const id = request.params.id;
    const timeStart = new Date();
    const timeEnd = new Date();
    await this.updateTaskUseCase.execute({
      id: id,
      title: title,
      description: description,
      userId: userId,
      timeStart: timeStart,
      timeEnd: timeEnd,
    });
    return response.json({ message: "Updated" }).status(200);
  }
}

export default new UpdateTaskController(updateTaskUseCase);
