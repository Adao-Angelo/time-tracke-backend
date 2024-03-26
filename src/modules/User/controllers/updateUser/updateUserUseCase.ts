import {
  IUpdateUserDTO,
  IUserRepository,
} from "../../repository/IUserRepository";
import UserRepository from "../../repository/UserRepository";
import { AppError } from "../../../../errors/appErrors";

class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ id, name, email, password }: IUpdateUserDTO) {
    if (!id || !name || !email || !password) {
      throw new AppError("send all data: name, email, password", 402);
    }
    const user = await this.userRepository.listByUserId(id);
    if (!user) {
      console.log("User Id not exist");
    }
    await this.userRepository.updateUserAccount({ id, name, email, password });
  }
}

export default new UpdateUserUseCase(UserRepository);
export { UpdateUserUseCase };
