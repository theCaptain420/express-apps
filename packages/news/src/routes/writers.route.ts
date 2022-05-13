import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import WritersController from '@/controllers/writers.controller';
import validationMiddleware from '@/middlewares/validation.middleware';
import { CreateWriterDto } from '@/dtos/writers.dto';

class WritersRoute implements Routes {
  public path = '/writers';
  public router = Router();
  public writersController = new WritersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.writersController.getWriters);
    this.router.get(`${this.path}/:id`, this.writersController.getNewsByWriter);
    this.router.post(
      `${this.path}`,
      validationMiddleware(CreateWriterDto, 'body'),
      this.writersController.createWriter
    );
  }
}

export default WritersRoute;
