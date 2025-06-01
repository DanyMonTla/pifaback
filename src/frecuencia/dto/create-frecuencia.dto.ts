import { IsString, MaxLength, IsOptional, IsBoolean } from 'class-validator';

export class CreateFrecuenciaDto {
  @IsString()
  @MaxLength(50)
  cfrecuencia: string;

  @IsOptional()
  @IsBoolean()
  bhabilitado?: boolean;
}
