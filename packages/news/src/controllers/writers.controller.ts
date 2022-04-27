import { NextFunction, Request, Response } from 'express';
import { Writer } from '@interfaces/writer.interface';
import WritersService from '@services/writers.service';
import { CreateWriterDto } from '@/dtos/writers.dto';

class WritersController {
  public writersService = new WritersService();

  public getWriters = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const findAllWritersData: Writer[] =
        await this.writersService.findAllWriters();

      res
        .status(200)
        .json({ data: findAllWritersData, message: 'List all writers' });
    } catch (error) {
      next(error);
    }
  };

  public createWriter = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const writerData: CreateWriterDto = req.body;
      const createWriterData: Writer = await this.writersService.createWriter(
        writerData
      );

      res.status(201).json({
        message: `Writer ${createWriterData.email} was created!`,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default WritersController;
