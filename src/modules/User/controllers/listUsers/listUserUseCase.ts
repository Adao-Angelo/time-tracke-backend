import { IUserRepository } from "../../repository/IUserRepository";
import UserRepository from "../../repository/UserRepository";

class ListUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute() {
    return await this.userRepository.ListUser();
  }
}

export default new ListUserUseCase(UserRepository);
export { ListUserUseCase };
