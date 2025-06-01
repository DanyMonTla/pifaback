import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'CAT_FUENTES' })
export class Fuente {
  @PrimaryGeneratedColumn({ name: 'NID_FUENTE', type: 'int' })
  nid_fuente: number;

  @Column({ name: 'CFUENTE', type: 'varchar', length: 100, unique: true })
  cfuente: string;

  @Column({ name: 'BHABILITADO', type: 'bit', default: 1 })
  bhabilitado: boolean;
}
