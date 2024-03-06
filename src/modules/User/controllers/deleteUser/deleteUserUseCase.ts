import {
  ICreateUserDTO,
  IUserRepository,
} from "../../repository/IUserRepository";
import UserRepository from "../../repository/UserRepository";
import { AppError } from "../../../../errors/appErrors";

class DeleteUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string) {
    if (!id) {
      throw new AppError("send The user Id", 401);
      return;
    }

    const user = await this.userRepository.listByUserId(id);
    if (!user) {
      console.log("User Id not exist");
    }

    await this.userRepository.removeUserAccount(id);
  }
}

export default new DeleteUserUseCase(UserRepository);
export { DeleteUserUseCase };
