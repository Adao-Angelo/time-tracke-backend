import { Task } from "../model/Task";
import {
  ICreateTaskDTO,
  ITasKRepository,
  IUpdateTaskDTO,
} from "./ITaskRepository";
import prismaClient from "../../../database/@prisma/client";

class TaskRepository implements ITasKRepository {
  async createTask(data: ICreateTaskDTO): Promise<void> {
    await prismaClient.task.create({ data: data });
  }
  async updateUserTask(data: IUpdateTaskDTO): Promise<void> {
    await prismaClient.task.update({
      where: {
        id: data.id,
      },
      data: data,
    });
  }
  async listUserTaskById(id: string): Promise<Task[]> {
    const tasks = await prismaClient.task.findMany({
      where: {
        userId: id,
      },
    });
    return tasks;
  }
  async listUserTask(): Promise<Task[]> {
    return prismaClient.task.findMany();
  }
  async deleteUserTask(id: string): Promise<void> {
    await prismaClient.task.delete({ where: { id: id } });
  }

  async listById(id: string): Promise<Task> {
    const task = await prismaClient.task.findFirst({
      where: {
        id: id,
      },
    });
    return task;
  }
}

export default new TaskRepository();
