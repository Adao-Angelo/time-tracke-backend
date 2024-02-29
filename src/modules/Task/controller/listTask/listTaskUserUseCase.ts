import { ITasKRepository } from "../../repository/ITaskRepository";
import TaskRepository from "../../repository/TaskRepository";

class ListTaskUseCase {
  constructor(private taskRepository: ITasKRepository) {}
  async execute() {
    return await this.taskRepository.listUserTask();
  }
}
export default new ListTaskUseCase(TaskRepository);
export { ListTaskUseCase };
