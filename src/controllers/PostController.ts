import { Request, Response } from "express";
import { PostService } from "../services/PostService";

const service = new PostService();

export class PostController {
  async getAllPosts(request: Request, response: Response) {
    try {
      const result = await service.fetchAllPosts();
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
      const result = await service.createPost(post);
      return response.json(result);
    } catch (error) {
      return response.json({
        error,
      });
    }
  }
}
