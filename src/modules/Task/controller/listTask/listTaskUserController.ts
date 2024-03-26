import { Request, Response } from "express";
import listTaskUseCase, { ListTaskUseCase } from "./listTaskUserUseCase";

class ListTaskController {
  constructor(private listTaskUseCase: ListTaskUseCase) {}
  async hanble(request: Request, response: Response) {
    const tasks = await listTaskUseCase.execute();
    return response.json(tasks).status(200);
  }
}

export default new ListTaskController(listTaskUseCase);
