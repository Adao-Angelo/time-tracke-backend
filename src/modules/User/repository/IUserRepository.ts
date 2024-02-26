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
  findUserEmail(email: string): IUser;
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
  removeUserAccount(id: string): void;
  ListUser(): IUser[];
}

export { ICreateUserDTO, IUpdateUserDTO, IUserRepository };
