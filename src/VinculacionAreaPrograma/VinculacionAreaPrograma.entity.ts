import { Entity, PrimaryColumn } from 'typeorm';

@Entity('tbl_vinculacion_areas_programas')
export class VinculacionAreaPrograma {
  @PrimaryColumn({ name: 'nid_area', type: 'int' })
  nid_area: number;

  @PrimaryColumn({ name: 'nid_programa_presupuestal', type: 'int' })
  nid_programa_presupuestal: number;
}
