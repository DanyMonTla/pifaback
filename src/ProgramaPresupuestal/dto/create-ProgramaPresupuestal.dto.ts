import {
  IsString,
  IsBoolean,
  IsOptional,
  IsDateString,
  IsInt,
  MaxLength,
} from 'class-validator';

export class CreateProgramaPresupuestalDto {
  @IsInt()
  nid_programa_presupuestal: number;

  @IsString()
  @MaxLength(50)
  cprograma_presupuestal: string;

  @IsString()
  cdefinicion_programa_presupuestal: string;

  @IsBoolean()
  bhabilitado: boolean;

  @IsDateString()
  dfecha_alta: string;

  @IsOptional()
  @IsDateString()
  dfecha_baja?: string;
}
