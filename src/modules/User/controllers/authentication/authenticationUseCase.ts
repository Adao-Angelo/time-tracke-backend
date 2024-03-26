import { sign } from "jsonwebtoken";
import { compare } from "bcrypt";
import { AppError } from "../../../../errors/appErrors";
import { IUserRepository } from "../../repository/IUserRepository";
interface IRequest {
  email: string;
  password: string;
}
interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}
class AutenticationUserUseCase {
  constructor(private userRepository: IUserRepository) {}
  async execute({ email, password }: IRequest) {
    if (!email || !password) {
      throw new AppError("Invalide request body!");
    }
    const user = await this.userRepository.listByUserEmail(email);

    if (!user) {
      throw new AppError("Email or password incorrect");
    }
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new AppError("Email or password incorrect");
    }
    const token = sign({}, "time_tracker_token", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };
    return tokenReturn;
  }
}

export { AutenticationUserUseCase };
