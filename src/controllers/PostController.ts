import { Request, Response } from "express";
import { PostService } from "../services/PostService";

const service = new PostService();

export class PostController {
  async getAllPosts(request: Request, response: Response) {
    const { userId } = request.query;

    try {
      const result = await service.fetchAll(userId as string);
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
