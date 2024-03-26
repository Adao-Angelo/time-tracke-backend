import { Task } from "../model/Task";

interface ICreateTaskDTO {
  id: string;
  title: string;
  description: string;
  userId: string;
  timeStart: Date;
  timeEnd: Date;
}
interface IUpdateTaskDTO {
  id: string;
  title: string;
  description: string;
  userId: string;
  timeStart: Date;
  timeEnd: Date;
}

interface ITasKRepository {
  createTask(data: ICreateTaskDTO): Promise<void>;
  updateUserTask(data: IUpdateTaskDTO): Promise<void>;
  listUserTaskById(id: string): Promise<Task[]>;
  listUserTask(): Promise<Task[]>;
  deleteUserTask(id: string): Promise<void>;
  listById(id: string): Promise<Task>;
}

export { ICreateTaskDTO, IUpdateTaskDTO, ITasKRepository };
