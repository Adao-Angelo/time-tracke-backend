import { IUser } from "../mode";

interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

interface IUpdateUserDTO {
  id: string;
  name: string;
  email: string;
  password: string;
}

interface IUserRepository {
  createUser({ name, email, password }: ICreateUserDTO): Promise<void>;
  findUserEmail(email: string): Promise<IUser>;
  updateUserAvatar({
    id,
    avatarUrl,
  }: {
    id: string;
    avatarUrl: string;
  }): Promise<void>;
  updateUserAccount({
    id,
    name,
    email,
    password,
  }: IUpdateUserDTO): Promise<void>;
  removeUserAccount(id: string): Promise<void>;
  ListUser(): Promise<IUser[]>;
  listByUserId(id: string): Promise<IUser>;
}

export { ICreateUserDTO, IUpdateUserDTO, IUserRepository };
