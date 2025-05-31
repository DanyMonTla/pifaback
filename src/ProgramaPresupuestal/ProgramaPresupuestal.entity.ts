import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('CAT_PROGRAMAS_PRESUPUESTALES')
export class ProgramaPresupuestal {
  @PrimaryColumn({ name: 'NID_PROGRAMA_PRESUPUESTAL', type: 'int' })
  nid_programa_presupuestal: number;

  @Column({ name: 'CPROGRAMA_PRESUPUESTAL', type: 'varchar', length: 50 })
  cprograma_presupuestal: string;

  @Column({ name: 'CDEFINICION_PROGRAMA_PRESUPUESTAL', type: 'text' })
  cdefinicion_programa_presupuestal: string;

  @Column({ name: 'BHABILITADO', type: 'bit', default: () => '1' })
  bhabilitado: boolean;

  @Column({ name: 'DFECHA_ALTA', type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  dfecha_alta: Date;

  @Column({ name: 'DFECHA_BAJA', type: 'datetime', nullable: true })
  dfecha_baja: Date | null;
}
