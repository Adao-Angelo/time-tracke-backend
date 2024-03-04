import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appErrors";
import { verify } from "jsonwebtoken";
import UserRepository from "../modules/User/repository/UserRepository";

interface IPayLoad {
  sub: string;
}
export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  if (!authHeader) throw new AppError("Token missing", 401);
  const [, token] = authHeader.split(" ");

  try {
    const { sub: userId } = verify(token, "easy_meal_token") as IPayLoad;
    const user = UserRepository.listByUserId(userId);
    if (!user) {
      throw new AppError("User does not exists!", 401);
    }
    request.user = {
      id: userId,
    };
    next();
  } catch {
    throw new AppError("Ivalide Token", 401);
  }
}
