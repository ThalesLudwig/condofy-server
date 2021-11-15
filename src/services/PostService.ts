import { DEFAULT_PAGE_SIZE } from "../constants/posts";
import { database } from "../database";
import { IFetchPostRequest } from "../interfaces/IFetchPostRequest";
import { IPost } from "../interfaces/IPost";

export class PostService {
  getRecordsToSkip(page?: string, size?: string): number {
    return page && size ? (parseInt(page) - 1) * parseInt(size) : 0;
  }

  async fetchAll(data: IFetchPostRequest) {
    const { userId, page, size } = data;
    const posts = await database.post.findMany({
      where: {
        user_id: userId,
      },
      include: {
        user: true,
      },
      orderBy: {
        created_at: "desc",
      },
      take: size ? parseInt(size) : DEFAULT_PAGE_SIZE,
      skip: this.getRecordsToSkip(page, size),
    });
    return posts;
  }

  async fetchById(postId: string) {
    const post = await database.post.findUnique({
      where: {
        id: postId,
      },
      include: {
        user: true,
      },
    });
    return post;
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
