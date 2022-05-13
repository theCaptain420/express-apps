import { model, Schema, Document } from 'mongoose';
import { Article } from '@/interfaces/news.interface';

const newsSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: false,
  },
  body: {
    type: String,
    required: true,
  },
  writer_id: {
    type: String,
    required: true,
  },
  tag_ids: {
    type: [String],
    required: true,
  },
});

const newsModel = model<Article & Document>('News', newsSchema);

export default newsModel;
