import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'CAT_TIPO_INDICADOR' })
export class TipoIndicador {
  @PrimaryGeneratedColumn({ name: 'NID_TIPO_INDICADOR', type: 'int' })
  nid_tipo_indicador: number;

  @Column({ name: 'CCOLOR_INDICADOR', type: 'char', length: 15 })
  ccolor_indicador: string;

  @Column({ name: 'BHABILITADO', type: 'bit', default: 1 })
  bhabilitado: boolean;

  @Column({ name: 'DFECHA_ALTA', type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  dfecha_alta: Date;

  @Column({ name: 'DFECHA_BAJA', type: 'datetime', nullable: true })
  dfecha_baja: Date | null;
}
