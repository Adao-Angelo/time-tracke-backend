import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { router } from "./routers/index.router";
import { AppError } from "./errors/appErrors";
const app = express();
const port = 2000;
app.use(express.json());
app.use(router);
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

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
