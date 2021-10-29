import { database } from "../database";
import { ILike } from "../interfaces/ILike";

export class LikeService {
  async fetchAll(postId: string) {
    const likes = await database.like.findMany({
      where: {
        post_id: postId,
      },
      include: {
        post: true,
        user: true,
      },
    });
    return likes;
  }

  async create(data: ILike) {
    const like = await database.like.create({
      data,
      include: {
        post: true,
        user: true,
      },
    });
    return like;
  }

  async delete(postId: string) {
    const like = await database.like.delete({
      where: {
        id: postId,
      },
      include: {
        post: true,
        user: true,
      },
    });
    return like;
  }
}
