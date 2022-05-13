export interface Writer {
  _id: string;
  email: string;
  name: string;
}

export interface ExtendedWriter {
  _id: string;
  email: string;
  name: string;
  articles: DataArticle[];
}

export interface DisplayArticle {
  title: string;
  body: string;
  writer?: Writer;
  tag_ids: string[];
}

export interface DataArticle {
  title: string;
  body: string;
  writer_id: string;
  tag_ids: string[];
}
