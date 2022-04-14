import { model, Schema, Document } from 'mongoose';
import { Article } from '@/interfaces/news.interface';

const newsSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  body: {
    type: String,
    required: true,
  },
});

const newsModel = model<Article & Document>('News', newsSchema);

export default newsModel;
