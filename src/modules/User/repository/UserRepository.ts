import {
  ICreateUserDTO,
  IUpdateUserDTO,
  IUserRepository,
} from "./IUserRepository";
import prismaClient from "../../../database/@prisma/client";
import { IUser } from "../mode";
import { v4 as uuidV4 } from "uuid";

class UserRepository implements IUserRepository {
  constructor() {}

  async createUser({ name, email, password }: ICreateUserDTO): Promise<void> {
    await prismaClient.user.create({
      data: {
        id: uuidV4(),
        name,
        email,
        password,
        avatar: "null",
      },
    });
  }
  async findUserEmail(email: string): Promise<IUser> {
    const UEmail = await prismaClient.user.findUniqueOrThrow({
      where: {
        email: email,
      },
    });
    return UEmail;
  }
  async updateUserAvatar({
    id,
    avatarUrl,
  }: {
    id: string;
    avatarUrl: string;
  }): Promise<void> {
    await prismaClient.user.update({
      where: { id: id },
      data: {
        avatar: avatarUrl,
      },
    });
  }
  async updateUserAccount({
    id,
    name,
    email,
    password,
  }: IUpdateUserDTO): Promise<void> {
    await prismaClient.user.update({
      where: { id: id },
      data: {
        name,
        email,
        password,
      },
    });
  }
  async removeUserAccount(id: string): Promise<void> {
    await prismaClient.user.delete({
      where: { id: id },
    });
  }
  async ListUser(): Promise<IUser[]> {
    return await prismaClient.user.findMany();
  }

  async listByUserId(id: string): Promise<IUser> {
    return await prismaClient.user.findUnique({ where: { id: id } });
  }

  async listByUserEmail(email: string): Promise<IUser> {
    return await prismaClient.user.findUnique({
      where: { email: email },
    });
  }
}

export default new UserRepository();
