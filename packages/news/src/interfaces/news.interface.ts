import { Writer } from './writer.interface';

export interface Article {
  _id: string;
  title: string;
  body: string;
  writer_id?: String;
  writer?: Writer;
  tag_ids: String[];
}
