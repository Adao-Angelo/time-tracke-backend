import { Request, Response } from "express";
import createTaskUseCase, { CreateTaskUseCase } from "./createTaskUseCase";
import { v4 as uuidV4 } from "uuid";

class CreateTaskController {
  constructor(private createTaskUseCase: CreateTaskUseCase) {}
  async hanble(request: Request, response: Response) {
    const { title, description, userId, timeStart, timeEnd } = request.body;
    await createTaskUseCase.execute({
      id: uuidV4(),
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
