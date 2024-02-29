import { AppError } from "../../../../errors/appErrors";
import {
  ITasKRepository,
  IUpdateTaskDTO,
} from "../../repository/ITaskRepository";
import TaskRepository from "../../repository/TaskRepository";

class UpdateTaskUseCase {
  constructor(private taskRepository: ITasKRepository) {}
  async execute(data: IUpdateTaskDTO) {
    if (
      !data.id ||
      !data.title ||
      !data.description ||
      !data.timeStart ||
      !data.timeEnd
    ) {
      throw new AppError("Invalide Request body ");
    }
    return await this.taskRepository.updateUserTask(data);
  }
}
export default new UpdateTaskUseCase(TaskRepository);
export { UpdateTaskUseCase };
