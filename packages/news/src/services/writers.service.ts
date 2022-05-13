import { ExtendedWriter, Writer } from '@interfaces/writer.interface';
import WritersModel from '@/models/writer.model';
import { CreateWriterDto } from '@dtos/writers.dto';
import { isEmpty } from '@/utils/util';
import { HttpException } from '@exceptions/HttpException';
import { ObjectId } from 'mongodb';

class WritersService {
  public writers = WritersModel;

  public async findAllWriters(): Promise<Writer[]> {
    const Writers: Writer[] = await this.writers.find();
    return Writers;
  }

  public async createWriter(writerData: CreateWriterDto): Promise<Writer> {
    if (isEmpty(writerData))
      throw new HttpException(400, "You're not userData");

    const findWriter: Writer = await this.writers.findOne({
      email: writerData.email,
    });

    if (findWriter)
      throw new HttpException(
        409,
        `Your email ${writerData.email} already exists`
      );

    const createUserData: Writer = await this.writers.create({
      ...writerData,
    });

    return createUserData;
  }

  public async findArticlesByWriterId(
    writerId: string
  ): Promise<ExtendedWriter> {
    if (isEmpty(writerId)) throw new HttpException(400, 'No writer_id sent');

    const object_id = new ObjectId(writerId);

    const foundWriter: ExtendedWriter[] = await this.writers.aggregate([
      { $match: { _id: object_id } },
      // Search for objectID and not string
      { $addFields: { writer_id: { $toString: '$_id' } } },
      {
        $lookup: {
          from: 'news',
          localField: 'writer_id',
          foreignField: 'writer_id',
          as: 'articles',
        },
      },
      { $unset: 'writer_id' },
    ]);
    console.log(foundWriter);
    if (!foundWriter || foundWriter.length === 0) {
      throw new HttpException(409, 'No writer found with id: ' + writerId);
    }
    return foundWriter[0];
  }
}

export default WritersService;
