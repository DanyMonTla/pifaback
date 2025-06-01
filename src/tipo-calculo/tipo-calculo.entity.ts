import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'CAT_TIPO_CALCULO' })
export class TipoCalculo {
  @PrimaryGeneratedColumn({ name: 'NID_TIPO_CALCULO', type: 'int' })
  nid_tipo_calculo: number;

  @Column({ name: 'CTIPO_CALCULO', type: 'varchar', length: 100, unique: true })
  ctipo_calculo: string;

  @Column({ name: 'BHABILITADO', type: 'bit', default: 1 })
  bhabilitado: boolean;
}
