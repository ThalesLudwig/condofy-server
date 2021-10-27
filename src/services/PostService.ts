import { database } from "../database";
import { IPost } from "../interfaces/IPost";

export class PostService {
  async fetchAll() {
    const posts = await database.post.findMany({
      include: {
        user: true,
      },
    });
    return posts;
  }

  async create(data: IPost) {
    const user = await database.post.create({
      data,
      include: {
        user: true,
      },
    });
    return user;
  }
}
