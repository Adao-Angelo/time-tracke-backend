import { AppError } from "../../../../errors/appErrors";
import { ITasKRepository } from "../../repository/ITaskRepository";
import TaskRepository from "../../repository/TaskRepository";

class DeleteTaskUseCase {
  constructor(private taskRepository: ITasKRepository) {}
  async execute(id: string) {
    if (!id) throw new AppError("Not Id");
    const task = await this.taskRepository.listById(id);
    if (!task) {
      throw new AppError("Task id not exist");
    }
    return await this.taskRepository.deleteUserTask(id);
  }
}

export default new DeleteTaskUseCase(TaskRepository);
export { DeleteTaskUseCase };
