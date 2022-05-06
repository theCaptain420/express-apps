import { IsEmail, IsString } from 'class-validator';

export class CreateWriterDto {
  @IsEmail()
  public email: string;

  @IsString()
  public name: string;
}
