import { IsString, IsBoolean, IsOptional, IsDateString, MaxLength, IsNumber } from 'class-validator';

export class CreateRolDto {
  @IsNumber()
  nidRol: number;

  @IsString()
  @MaxLength(10)
  crol: string;

  @IsBoolean()
  bhabilitado: boolean;

  @IsDateString()
  dfechaAlta: string;

  @IsOptional()
  @IsDateString()
  dfechaBaja?: string;
}
