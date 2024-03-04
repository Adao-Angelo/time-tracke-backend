interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  admin: boolean;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
}

export { IUser };
