import { Request, Response } from "express";
import { CondominiumService } from "../services/CondominiumService";

const service = new CondominiumService();

export class CondominiumController {
  async getAllCondominiums(request: Request, response: Response) {
    try {
      const result = await service.fetchAll();
      return response.json(result);
    } catch (error) {
      return response.json({
        error,
      });
    }
  }

  async createCondominium(request: Request, response: Response) {
    const condominium = request.body;
    try {
      const result = await service.create(condominium);
      return response.json(result);
    } catch (error) {
      return response.json({
        error,
      });
    }
  }
}
