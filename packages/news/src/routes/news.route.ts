import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import NewsController from '@/controllers/news.controller';

class NewsRoute implements Routes {
  public path = '/news';
  public router = Router();
  public usersController = new NewsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.usersController.getNews);
  }
}

export default NewsRoute;
