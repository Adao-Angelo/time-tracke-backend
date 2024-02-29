import { AppError } from "../../../../errors/appErrors";
import {
  ICreateTaskDTO,
  ITasKRepository,
} from "../../repository/ITaskRepository";
import TaskRepository from "../../repository/TaskRepository";

class CreateTaskUseCase {
  constructor(private taskRepository: ITasKRepository) {}
  async execute(data: ICreateTaskDTO) {
    if (
      !data.title ||
      !data.description ||
      !data.timeStart ||
      !data.timeEnd ||
      !data.userId
    ) {
      throw new AppError("Invalide Request body ");
    }
    if (!data.timeStart) {
      data.timeStart = new Date();
      data.timeEnd = new Date();
    }
    return await this.taskRepository.createTask(data);
  }
}
export default new CreateTaskUseCase(TaskRepository);
export { CreateTaskUseCase };
