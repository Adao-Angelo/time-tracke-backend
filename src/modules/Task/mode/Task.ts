import { v4 as uuidV4 } from "uuid";

interface ITask {
  id?: string;
  title: string;
  description: string;
  timeStart: Date;
  timeEnd: Date;
  cretedAt: Date;
}
class Task {
  id?: string;
  title: string;
  description: string;
  timeStart: Date;
  timeEnd: Date;
  cretedAt: Date;
  constructor({ title, description, timeStart, timeEnd, cretedAt }: ITask) {
    this.title = title;
    this.description = description;
    this.timeStart = timeStart;
    this.timeEnd = timeEnd;
    this.cretedAt = cretedAt;
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Task };
