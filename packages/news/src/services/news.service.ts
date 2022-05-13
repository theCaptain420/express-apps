import { Article } from '@/interfaces/news.interface';
import newsModel from '@/models/news.model';
import { isEmpty } from '@utils/util';
import { HttpException } from '@exceptions/HttpException';
import { ObjectId } from 'mongodb';
import { CreateNewsDto } from '@/dtos/news.dto';
class NewsService {
  public news = newsModel;

  private baseArticleAggregate = [
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
    // Part of the writer object
    { $unset: 'writer_id' },
    {
      $unwind: '$writer', // this to convert the array of one object to be an object
    },
  ];

  public async findAllArticles(): Promise<Article[]> {
    const articles: Article[] = await this.news.aggregate([
      ...this.baseArticleAggregate,
    ]);
    return articles;
  }

  public async findArticleById(articleId: string): Promise<Article> {
    if (isEmpty(articleId)) throw new HttpException(400, 'No article_id sent');

    const object_id = new ObjectId(articleId);

    const foundArticle: Article[] = await this.news.aggregate([
      { $match: { _id: object_id } },
      ...this.baseArticleAggregate,
    ]);

    if (!foundArticle || foundArticle.length === 0) {
      throw new HttpException(409, 'No article found with id: ' + articleId);
    }
    return foundArticle[0];
  }

  public async createArticle(arData: CreateNewsDto): Promise<Article> {
    if (isEmpty(arData))
      throw new HttpException(400, "You're not article data");

    const createArticleData: Article = await this.news.create(arData);

    return createArticleData;
  }
}

export default NewsService;
