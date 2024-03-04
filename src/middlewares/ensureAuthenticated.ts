import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appErrors";

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
  } catch {}
}
