import {
  ICreateUserDTO,
  IUserRepository,
} from "../../repository/IUserRepository";
import UserRepository from "../../repository/UserRepository";

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ name, email, password }: ICreateUserDTO) {
    await this.userRepository.createUser({ name, email, password });
  }
}

export default new CreateUserUseCase(UserRepository);
export { CreateUserUseCase };
