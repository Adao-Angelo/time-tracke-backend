import { Request, Response } from "express";
import listTaskByUserUseCase, {
  ListTaskByUserIdUseCase,
} from "../listTaskUserById//listTaskByUserIdUseCase";
class ListTaskByUserController {
  constructor(private listTaskByUserIdUseCase: ListTaskByUserIdUseCase) {}
  async hanble(request: Request, response: Response) {
    const id = request.params.id;
    const tasks = await this.listTaskByUserIdUseCase.execute(id);
    return response.json(tasks).status(200);
  }
}

export default new ListTaskByUserController(listTaskByUserUseCase);
