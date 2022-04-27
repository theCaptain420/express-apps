import { Article } from '@/interfaces/news.interface';
import newsModel from '@/models/news.model';
import { isEmpty } from '@utils/util';
import { HttpException } from '@exceptions/HttpException';

class NewsService {
  public news = newsModel;

  public async findAllArticles(): Promise<Article[]> {
    const articles: Article[] = await this.news.aggregate([
      // Search for objectID and not string
      { $addFields: { writer_id: { $toObjectId: '$writer_id' } } },
      {
        $lookup: {
          from: 'writers',
          localField: 'writer_id',
          foreignField: '_id',
          as: 'writer',
        },
      },
      { $unset: 'writer_id' },
    ]);
    return articles;
  }

  public async findArticleById(articleId: string): Promise<Article> {
    if (isEmpty(articleId)) throw new HttpException(400, 'No article_id sent');

    const findArticle: Article = await this.news.findOne({ _id: articleId });
    if (!findArticle)
      throw new HttpException(409, 'No article found with id: ' + articleId);

    return findArticle;
  }
}

export default NewsService;
