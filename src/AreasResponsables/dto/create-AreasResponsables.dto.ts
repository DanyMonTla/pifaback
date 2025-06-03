import {
  IsInt,
  IsString,
  IsEmail,
  IsBoolean,
  IsOptional,
  IsDateString,
  MaxLength,
} from 'class-validator';

export class CreateAreaDto {
  @IsInt()
  nid_area: number;

  @IsString()
  @MaxLength(150)
  cunidad_responsable: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  creporta_a?: string;

  @IsEmail()
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
