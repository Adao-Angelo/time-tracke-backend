import { AppError } from "../../../../../errors/appErrors";
import { ITasKRepository } from "../../../repository/ITaskRepository";
import TaskRepository from "../../../repository/TaskRepository";

class ListTaskByUserIdUseCase {
  constructor(private taskRepository: ITasKRepository) {}
  async execute(id: string) {
    const tasksUser = await this.taskRepository.listUserTaskById(id);
    if (!tasksUser) {
      throw new AppError("Not Find Task", 401);
    }
    return tasksUser;
  }
}
export default new ListTaskByUserIdUseCase(TaskRepository);
export { ListTaskByUserIdUseCase };
