import {
  IsInt,
  IsString,
  IsBoolean,
  IsDateString,
  IsOptional,
  MaxLength,
} from 'class-validator';

export class CreateAreaDto {
  @IsInt()
  nid_area: number;

  @IsString()
  @MaxLength(150)
  cunidad_responsable: string;

  @IsString()
  @MaxLength(50)
  @IsOptional()
  creporta_a?: string;

  @IsString()
  @MaxLength(320)
  ccorreo_electronico_ur: string;

  @IsBoolean()
  bhabilitado: boolean;

  @IsDateString()
  dfecha_alta: string;

  @IsOptional()
  @IsDateString()
  dfecha_baja?: string;
}
