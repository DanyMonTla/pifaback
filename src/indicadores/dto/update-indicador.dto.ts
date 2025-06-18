import { PartialType } from '@nestjs/mapped-types';
import { CreateIndicadorDto } from './create-indicador.dto';
import { IsNumber, IsOptional } from 'class-validator';

export class UpdateIndicadorDto extends PartialType(CreateIndicadorDto) {
  @IsOptional()
  @IsNumber()
  readonly nid_programa_presupuestal?: number;
}
