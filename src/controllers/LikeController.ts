import { Request, Response } from "express";
import { LikeService } from "../services/LikeService";

const service = new LikeService();

export class LikeController {
  async getAllLikes(request: Request, response: Response) {
    const { postId } = request.query;

    try {
      const result = await service.fetchAll(postId as string);
      return response.json(result);
    } catch (error) {
      return response.json({
        error,
      });
    }
  }

  async createLike(request: Request, response: Response) {
    const like = request.body;
    try {
      const result = await service.create(like);
      return response.json(result);
    } catch (error) {
      return response.json({
        error,
      });
    }
  }

  async deleteLike(request: Request, response: Response) {
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
