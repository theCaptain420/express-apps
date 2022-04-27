import { NextFunction, Request, Response } from 'express';
import { Article } from '@interfaces/news.interface';
import NewsService from '@services/news.service';

class NewsController {
  public newsService = new NewsService();

  public getNews = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllNewsData: Article[] =
        await this.newsService.findAllArticles();

      res.status(200).json({ data: findAllNewsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getNewsById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const articleId: string = req.params.id;
      const findOneArticleData: Article =
        await this.newsService.findArticleById(articleId);

      res.status(200).json({ data: findOneArticleData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };
}

export default NewsController;
