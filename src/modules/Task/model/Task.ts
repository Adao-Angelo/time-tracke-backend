import { v4 as uuidV4 } from "uuid";

interface ITask {
  id?: string;
  title: string;
  description: string;
  userId: string;
  timeStart: Date;
  timeEnd: Date;
  createdAt: Date;
  updatedAt: Date;
}
class Task {
  id?: string;
  title: string;
  description: string;
  userId: string;
  timeStart: Date;
  timeEnd: Date;
  createdAt: Date;
  updatedAt?: Date;
  constructor({
    title,
    description,
    timeStart,
    timeEnd,
    createdAt,
    userId,
  }: ITask) {
    this.title = title;
    this.description = description;
    this.timeStart = timeStart;
    this.timeEnd = timeEnd;
    this.createdAt = createdAt;
    this.userId = userId;
    this.updatedAt = new Date();
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Task };
