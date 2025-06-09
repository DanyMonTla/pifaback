import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'cat_clasificacion' })
export class Clasificacion {
  @PrimaryGeneratedColumn({ name: 'NID_CLASIFICACION', type: 'int' })
  nid_clasificacion: number;

  @Column({ name: 'CNOMBRE_CLASIFICACION', type: 'varchar', length: 80 })
  cnombre_clasificacion: string;
}
