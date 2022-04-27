import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import WritersController from '@/controllers/writers.controller';

class WritersRoute implements Routes {
  public path = '/writers';
  public router = Router();
  public writersController = new WritersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.writersController.getWriters);
  }
}

export default WritersRoute;
