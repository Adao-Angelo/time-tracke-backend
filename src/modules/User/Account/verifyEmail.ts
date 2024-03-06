import { Request, Response } from "express";
import { IUserRepository } from "../../User/repository/IUserRepository";
import { AppError } from "../../../errors/appErrors";
import UserRepository from "../repository/UserRepository";
class VerifyUserEmail {
  constructor(private userRepository: IUserRepository) {}
  async execute(request: Request, response: Response) {
    const { email } = request.body;
    if (!email) throw new AppError("Send The Email", 400);
    const user = await this.userRepository.findUserEmail(email);
    if (!user) {
      throw new AppError("user Not Find", 402);
    }

    return response
      .json({
        message: "Verify your email",
        User: user.name,
        email: user.email,
      })
      .status(200);
  }
}

export default new VerifyUserEmail(UserRepository);
