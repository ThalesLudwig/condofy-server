import { Request, Response } from "express";
import { IFetchPostRequest } from "../interfaces/IFetchPostRequest";
import { PostService } from "../services/PostService";

const service = new PostService();

export class PostController {
  async getAllPosts(request: Request, response: Response) {
    const { userId, page, size } = request.query as any;
    const data: IFetchPostRequest = {
      page,
      userId,
      size,
    };
    try {
      const result = await service.fetchAll(data);
      return response.json(result);
    } catch (error) {
      return response.json({ error });
    }
  }

  async getPostById(request: Request, response: Response) {
    const { id } = request.params;
    try {
      const result = await service.fetchById(id);
      return response.json(result);
    } catch (error) {
      return response.json({
        error,
      });
    }
  }

  async createPost(request: Request, response: Response) {
    const post = request.body;
    try {
      const result = await service.create(post);
      return response.json(result);
    } catch (error) {
      return response.json({
        error,
      });
    }
  }

  async updatePost(request: Request, response: Response) {
    const { id } = request.params;
    const post = request.body;

    try {
      const result = await service.update(post, id);
      return response.json(result);
    } catch (error) {
      return response.json({
        error,
      });
    }
  }

  async deletePost(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const result = await service.delete(id);
      return response.json(result);
    } catch (error) {
      return response.json({
        error,
      });
    }
  }
}
