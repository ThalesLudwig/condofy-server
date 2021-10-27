import { Request, Response } from "express";
import { UserService } from "../services/UserService";

const service = new UserService();

export class UserController {
  async getAllUsers(request: Request, response: Response) {
    try {
      const result = await service.fetchAll();
      return response.json(result);
    } catch (error) {
      return response.json({
        error,
      });
    }
  }

  async createUser(request: Request, response: Response) {
    const user = request.body;
    try {
      const result = await service.create(user);
      return response.json(result);
    } catch (error) {
      return response.json({
        error,
      });
    }
  }
}
