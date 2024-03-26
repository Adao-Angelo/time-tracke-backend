import { Request, Response } from "express";
import { ListUserUseCase } from "./listUserUseCase";
import listUserUseCase from "./listUserUseCase";

class ListUserControlller {
  constructor(private createUserUseCase: ListUserUseCase) {}
  async randle(request: Request, response: Response) {
    const users = await this.createUserUseCase.execute();

    return response.json(users).status(200);
  }
}

export default new ListUserControlller(listUserUseCase);
