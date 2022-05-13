import { Article } from './news.interface';

export interface Writer {
  _id: string;
  email: string;
  name: string;
}

export interface ExtendedWriter {
  _id: string;
  email: string;
  name: string;
  articles: Article[];
  // img?
  // info
}
