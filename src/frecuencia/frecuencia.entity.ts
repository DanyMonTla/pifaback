import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('CAT_FRECUENCIAS')
export class Frecuencia {
  @PrimaryGeneratedColumn({ name: 'NID_FRECUENCIA' })
  nid_frecuencia: number;

  @Column({ name: 'CFRECUENCIA', length: 50, unique: true })
  cfrecuencia: string;

  @Column({ name: 'BHABILITADO', type: 'bit', default: () => '1' })
  bhabilitado: boolean;
}
