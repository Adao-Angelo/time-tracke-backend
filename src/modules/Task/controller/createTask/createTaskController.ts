import { Request, Response } from "express";
import createTaskUseCase, { CreateTaskUseCase } from "./createTaskUseCase";

class CreateTaskController {
  constructor(private createTaskUseCase: CreateTaskUseCase) {}
  async hanble(request: Request, response: Response) {
    const { title, description, userId, timeStart, timeEnd } = request.body;
    await createTaskUseCase.execute({
      title,
      description,
      userId,
      timeStart,
      timeEnd,
    });
    return response.json({ message: "created" }).status(200);
  }
}

export default new CreateTaskController(createTaskUseCase);
