import { NextFunction, Request, Response } from 'express';
import { Writer } from '@interfaces/writer.interface';
import WritersService from '@services/writers.service';

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
}

export default WritersController;
