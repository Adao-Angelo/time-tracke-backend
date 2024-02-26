import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";
import createUserUseCase from "./createUserUseCase";

class CreateUserControlller {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  async randle(request: Request, response: Response) {
    const { name, email, password } = request.body;
    await this.createUserUseCase.execute({ name, email, password });

    return response.json({ message: "created" }).status(201);
  }
}

export default new CreateUserControlller(createUserUseCase);
