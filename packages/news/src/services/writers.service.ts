import { Writer } from '@interfaces/writer.interface';
import WritersModel from '@/models/writer.model';
import { CreateWriterDto } from '@dtos/writers.dto';
import { isEmpty } from '@/utils/util';
import { hash } from 'bcrypt';
import { HttpException } from '@exceptions/HttpException';

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
}

export default WritersService;
