import { hash } from "bcrypt";
import {
  ICreateUserDTO,
  IUserRepository,
} from "../../repository/IUserRepository";
import UserRepository from "../../repository/UserRepository";
import { AppError } from "../../../../errors/appErrors";

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}
  async execute({ name, email, password }: ICreateUserDTO) {
    if (!email || !name || !password) {
      throw new AppError("Inavalide request body !");
    }
    const user = await this.userRepository
      .findUserEmail(email)
      .catch((err) => console.log(err));
    if (user) {
      throw new AppError("User email alread exist!");
    }
    const hashPassword = await hash(password, 8);
    await this.userRepository.createUser({
      name,
      email,
      password: hashPassword,
    });
  }
}

export default new CreateUserUseCase(UserRepository);
export { CreateUserUseCase };
