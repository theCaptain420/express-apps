import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import NewsController from '@/controllers/news.controller';
import authMiddleware from '@/middlewares/auth.middleware';

class NewsRoute implements Routes {
  public path = '/news';
  public router = Router();
  public newsController = new NewsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.newsController.getNews);
    this.router.get(`${this.path}/:id`, this.newsController.getNewsById);
    this.router.post(
      `${this.path}`,
      authMiddleware,
      this.newsController.createNews
    );
  }
}

export default NewsRoute;
