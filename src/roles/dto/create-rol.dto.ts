import { IsString, IsBoolean, IsOptional, IsDateString, MaxLength } from 'class-validator';

export class CreateRolDto {
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
