import { IsInt } from 'class-validator';

export class CreateVinculacionAreaProgramaDto {
  @IsInt()
  nid_area: number;

  @IsInt()
  nid_programa_presupuestal: number;
}
