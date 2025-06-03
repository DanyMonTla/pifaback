import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TBL_AREAS_RESPONSABLES')
export class AreaResponsable {
  @PrimaryColumn({ name: 'NID_AREA', type: 'int' })
  nid_area: number;

  @Column({ name: 'CUNIDAD_RESPONSABLE', type: 'varchar', length: 150 })
  cunidad_responsable: string;

  @Column({ name: 'CREPORTA_A', type: 'varchar', length: 50, nullable: true })
  creporta_a?: string;

  @Column({ name: 'CCORREO_ELECTRONICO_UR', type: 'varchar', length: 320 })
  ccorreo_electronico_ur: string;

  @Column({ name: 'BHABILITADO', type: 'bit', default: () => '1' })
  bhabilitado: boolean;

  @Column({ name: 'DFECHA_ALTA', type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  dfecha_alta: Date;

  @Column({ name: 'DFECHA_BAJA', type: 'datetime', nullable: true })
  dfecha_baja?: Date;
}
