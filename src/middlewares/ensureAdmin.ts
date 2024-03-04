import { NextFunction, Request, Response } from "express";
import UserRepository from "../modules/User/repository/UserRepository";
import { AppError } from "../errors/appErrors";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.user;
  const user = await UserRepository.listByUserId(id);
  if (!user.admin) {
    throw new AppError("User is not Admin!");
  }
  return next();
}
