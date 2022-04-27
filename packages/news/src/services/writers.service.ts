import { Writer } from '@interfaces/writer.interface';
import WritersModel from '@/models/writer.model';

class WritersService {
  public writers = WritersModel;

  public async findAllWriters(): Promise<Writer[]> {
    const Writers: Writer[] = await this.writers.find();
    return Writers;
  }
}

export default WritersService;
