import { database } from "../database";
import { IUser } from "../interfaces/IUser";

export class UserService {
  async fetchAll() {
    const users = await database.user.findMany({
      include: {
        condominium: true,
        posts: true,
      },
    });
    return users;
  }

  async create(data: IUser) {
    const user = await database.user.create({
      data,
      include: {
        posts: true,
        condominium: true,
      },
    });
    return user;
  }
}
