import { AppError } from "../../../../errors/appErrors";
import { ITasKRepository } from "../../repository/ITaskRepository";
import TaskRepository from "../../repository/TaskRepository";

class DeleteTaskUseCase {
  constructor(private taskRepository: ITasKRepository) {}
  async execute(id: string) {
    if (!id) throw new AppError("Not Id");
    return await this.taskRepository.deleteUserTask(id);
  }
}
export default new DeleteTaskUseCase(TaskRepository);
export { DeleteTaskUseCase };
