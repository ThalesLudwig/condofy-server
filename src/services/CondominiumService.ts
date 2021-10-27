import { database } from "../database";
import { ICondominium } from "../interfaces/ICondominium";

export class CondominiumService {
  async fetchAll() {
    const condominiums = await database.condominium.findMany({
      include: {
        users: true,
      },
    });
    return condominiums;
  }

  async create(data: ICondominium) {
    const user = await database.condominium.create({
      data,
      include: {
        users: true,
      },
    });
    return user;
  }
}
