import {
  IsString,
  IsBoolean,
  IsOptional,
  IsDate,
  IsInt,
  MaxLength,
} from 'class-validator';
import { Type } from 'class-transformer';

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

  @IsDate()
  @Type(() => Date)
  dfecha_alta: Date;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dfecha_baja?: Date | null;

}
