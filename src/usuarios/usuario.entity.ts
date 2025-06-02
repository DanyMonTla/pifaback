import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TBL_USUARIOS')
export class Usuario {
  @PrimaryColumn({ name: 'CID_USUARIO', type: 'char', length: 6 })
  idUsuario: string;

  @Column({ name: 'CNOMBRE_USUARIO', length: 50 })
  nombreUsuario: string;

  @Column({ name: 'CAPELLIDO_P_USUARIO', length: 25 })
  apellidoP: string;

  @Column({ name: 'CAPELLIDO_M_USUARIO', length: 25 })
  apellidoM: string;

  @Column({ name: 'CCARGO_USUARIO', length: 20 })
  cargoUsuario: string;

  @Column({ name: 'CHASHED_PASSWORD', length: 255 })
  hashedPassword: string;

  @Column({ name: 'NID_AREA', type: 'int' })
  idArea: number;

  @Column({ name: 'NID_ROL', type: 'int' })
  idRol: number;

  @Column({ name: 'BTITULO_USUARIO', length: 10, nullable: true })
  tituloUsuario?: string;

  @Column({ name: 'BHABILITADO', type: 'tinyint', width: 1, default: () => '1' })
  habilitado: boolean;

  @Column({ name: 'DFECHA_ALTA', type: 'datetime' })
  fechaAlta: Date;

  @Column({ name: 'DFECHA_BAJA', type: 'datetime', nullable: true })
  fechaBaja?: Date | null;
}
