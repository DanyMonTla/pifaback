import { IsString, IsInt, MaxLength, IsOptional, IsBoolean } from 'class-validator';

export class CreateIndicadorDto {
  @IsInt()
  nid_tipo_indicador: number;

  @IsInt()
  nid_proyecto_investigacion: number;

  @IsInt()
  nid_act_cedetec: number;

  @IsInt()
  nid_act_cultural: number;

  @IsInt()
  nid_programa_presupuestal: number;

  @IsString()
  @MaxLength(10)
  cclave_indicador: string;

  @IsString()
  @MaxLength(200)
  cdesc_indicador: string;

  @IsString()
  @MaxLength(900)
  cdefinicion_indicador: string;

  // Nuevo campo
  @IsString()
  @MaxLength(500)
  cfuente: string;

  @IsInt()
  nid_frecuencia: number;

  @IsInt()
  nid_tipo_calculo: number;

  @IsOptional()
  @IsBoolean()
  bhabilitado?: boolean;

  @IsOptional()
  dfecha_alta?: Date;

  @IsOptional()
  dfecha_baja?: Date | null;
}
