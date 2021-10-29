import { database } from "../database";
import { IPost } from "../interfaces/IPost";

export class PostService {
  async fetchAll(userId: string) {
    const posts = await database.post.findMany({
      where: {
        user_id: userId,
      },
      include: {
        user: true,
      },
    });
    return posts;
  }

  async create(data: IPost) {
    const post = await database.post.create({
      data,
      include: {
        user: true,
      },
    });
    return post;
  }

  async update(data: IPost, postId: string) {
    const post = await database.post.update({
      data,
      where: {
        id: postId,
      },
      include: {
        user: true,
      },
    });
    return post;
  }

  async delete(postId: string) {
    const post = await database.post.delete({
      where: {
        id: postId,
      },
      include: {
        user: true,
      },
    });
    return post;
  }
}
