import Express, { NextFunction, Request, Response } from "express";
import { router } from "./routers/index.router";
import "express-async-errors";
import { AppError } from "./errors/appErrors";
const app = Express();
const port = 2000;
app.use(Express.json());
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal server Error - ${err.message}`,
    });
  }
);

app.use(router);
app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
