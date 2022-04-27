import { model, Schema, Document } from 'mongoose';
import { Writer } from '@interfaces/writer.interface';

const writersSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const writersModel = model<Writer & Document>('Writers', writersSchema);

export default writersModel;
