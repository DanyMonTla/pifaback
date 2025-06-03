import { IsInt, IsString, MaxLength, IsBoolean, IsDateString, IsOptional } from 'class-validator';

export class CreateTipoProgramaDto {
  @IsInt()
  nid_tipo_programa: number;

  @IsString()
  @MaxLength(50)
  ctipo_programa: string;

  @IsBoolean()
  bhabilitado: boolean;

  @IsDateString()
  dfecha_alta: string;

  @IsOptional()
  @IsDateString()
  dfecha_baja?: string;
}
