import { IsString } from 'class-validator';

export class CreateNewsDto {
  @IsString()
  public title: string;

  @IsString()
  public body: string;

  @IsString()
  public writer_id: string;

  @IsString()
  public tag_ids: string[];
}
