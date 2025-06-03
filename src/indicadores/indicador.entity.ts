import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'TBL_INDICADORES' })
export class Indicador {
  @PrimaryGeneratedColumn({ name: 'NID_INDICADOR', type: 'int' })
  nid_indicador: number;

  @Column({ name: 'NID_TIPO_INDICADOR', type: 'int' })
  nid_tipo_indicador: number;

  @Column({ name: 'NID_PROYECTO_INVESTIGACION', type: 'int' })
  nid_proyecto_investigacion: number;

  @Column({ name: 'NID_ACT_CEDETEC', type: 'int' })
  nid_act_cedetec: number;

  @Column({ name: 'NID_ACT_CULTURAL', type: 'int' })
  nid_act_cultural: number;

  @Column({ name: 'NID_PROGRAMA_PRESUPUESTAL', type: 'int' })
  nid_programa_presupuestal: number;

  @Column({ name: 'CCLAVE_INDICADOR', type: 'varchar', length: 10, unique: true })
  cclave_indicador: string;

  @Column({ name: 'CDESC_INDICADOR', type: 'varchar', length: 200 })
  cdesc_indicador: string;

  @Column({ name: 'CDEFINICION_INDICADOR', type: 'varchar', length: 900 })
  cdefinicion_indicador: string;

  // Elimina NID_FUENTE y agrega CFUENTE:
  @Column({ name: 'CFUENTE', type: 'varchar', length: 500, nullable: true })
  cfuente: string;

  @Column({ name: 'NID_FRECUENCIA', type: 'int' })
  nid_frecuencia: number;

  @Column({ name: 'NID_TIPO_CALCULO', type: 'int' })
  nid_tipo_calculo: number;

  @Column({ name: 'BHABILITADO', type: 'bit', default: 1 })
  bhabilitado: boolean;

  @Column({ name: 'DFECHA_ALTA', type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  dfecha_alta: Date;

  @Column({ name: 'DFECHA_BAJA', type: 'datetime', nullable: true })
  dfecha_baja: Date | null;
}
