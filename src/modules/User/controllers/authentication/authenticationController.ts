import { Request, Response } from "express";
import { AutenticationUserUseCase } from "./authenticationUseCase";

class AutenticationUserController {
  constructor(private authenticationUserUseCase: AutenticationUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const token = await this.authenticationUserUseCase.execute({
      email,
      password,
    });

    return response.status(201).json(token);
  }
}

export { AutenticationUserController };
