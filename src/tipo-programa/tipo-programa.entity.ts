import { Entity, Column, PrimaryColumn } from 'typeorm';


@Entity('CAT_TIPO_PROGRAMA')
export class TipoPrograma {
  @PrimaryColumn({ name: 'NID_TIPO_PROGRAMA', type: 'int' })
  nid_tipo_programa: number;

  @Column({ name: 'CTIPO_PROGRAMA', type: 'varchar', length: 50 })
  ctipo_programa: string;

  @Column({ name: 'BHABILITADO', type: 'bit', default: true })
  bhabilitado: boolean;

  @Column({ name: 'DFECHA_ALTA', type: 'datetime' })
  dfecha_alta: Date;

  @Column({ name: 'DFECHA_BAJA', type: 'datetime', nullable: true })
  dfecha_baja?: Date | null;
}
