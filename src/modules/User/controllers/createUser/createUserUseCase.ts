import { hash } from "bcrypt";
import {
  ICreateUserDTO,
  IUserRepository,
} from "../../repository/IUserRepository";
import UserRepository from "../../repository/UserRepository";

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}
  async execute({ name, email, password }: ICreateUserDTO) {
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
