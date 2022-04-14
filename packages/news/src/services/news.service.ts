import { Article } from '@/interfaces/news.interface';
import newsModel from '@/models/news.model';

class NewsService {
  public news = newsModel;

  public async findAllArticles(): Promise<Article[]> {
    const Articles: Article[] = await this.news.find();
    return Articles;
  }
}

export default NewsService;
