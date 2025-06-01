import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('TBL_ROLES')
export class Rol {
  @PrimaryColumn({ name: 'NID_ROL' })
  nidRol: number;

  @Column('varchar', { name: 'CROL', length: 10, nullable: false })
  crol: string;

 @Column('bit', { name: 'BHABILITADO', default: true })
  bhabilitado: boolean;

  @Column('datetime', { name: 'DFECHA_ALTA', default: () => 'CURRENT_TIMESTAMP' })
  dfechaAlta: Date;

  @Column('datetime', { name: 'DFECHA_BAJA', nullable: true })
  dfechaBaja?: Date;
}
