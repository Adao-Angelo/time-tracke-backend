import cron from "node-cron";
import listTaskByUserIdUseCase from "../../modules/Task/controller/listTask/listTaskUserById/listTaskByUserIdUseCase";

class VerifyTime {
  userId: string;
  constructor(userId: string) {
    this.userId = userId;
    this.execute();
  }
  async execute() {
    const userTasks = await listTaskByUserIdUseCase.execute(this.userId);
    for (let task of userTasks) {
      if (task.timeStart == new Date()) {
      }
    }
    cron.schedule("5 * * * * * ", () => {
      this.execute();
    });
  }
}
export { VerifyTime };
