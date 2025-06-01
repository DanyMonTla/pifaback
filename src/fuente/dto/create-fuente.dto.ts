import { IsString, MaxLength } from 'class-validator';

export class CreateFuenteDto {
  @IsString()
  @MaxLength(100)
  cfuente: string;
}
