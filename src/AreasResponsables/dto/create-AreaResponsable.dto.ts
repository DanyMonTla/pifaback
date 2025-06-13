import { IsInt, IsString, IsBoolean, IsOptional, IsDateString } from 'class-validator';

export class CreateAreaDto {
  @IsInt()
  nid_area: number;

  @IsString()
  cunidad_responsable: string;

  @IsOptional()
  @IsString()
  creporta_a?: string;

  @IsString()
  ccorreo_electronico_ur: string;

  @IsBoolean()
  bhabilitado: boolean;

  @IsDateString()
  dfecha_alta: string;

  @IsOptional()
  @IsDateString()
  dfecha_baja?: string;
}
