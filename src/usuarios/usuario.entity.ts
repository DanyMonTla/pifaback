import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'usuarios' })
export class Usuario {
  @PrimaryColumn({ name: 'CID_USUARIO', type: 'char', length: 6 })
  idUsuario: string;

  @Column({ name: 'CNOMBRE_USUARIO', type: 'varchar', length: 50 })
  nombreUsuario: string;

  @Column({ name: 'CAPELLIDO_P_USUARIO', type: 'varchar', length: 25 })
  apellidoPaterno: string;

  @Column({ name: 'CAPELLIDO_M_USUARIO', type: 'varchar', length: 25 })
  apellidoMaterno: string;

  @Column({ name: 'CCARGO_USUARIO', type: 'varchar', length: 20 })
  cargoUsuario: string;

  @Column({ name: 'CHASHED_PASSWORD', type: 'char', length: 15 })
  hashedPassword: string;

  @Column({ name: 'NID_AREA', type: 'int' })
  idArea: number;

  @Column({ name: 'NID_ROL', type: 'int' })
  idRol: number;

  @Column({ name: 'BITTITULO_USUARIO', type: 'varchar', length: 10, nullable: true })
  tituloUsuario: string;

  @Column({ name: 'BHABILITADO', type: 'bit' })
  habilitado: boolean;

  @Column({ name: 'DFECHA_ALTA', type: 'datetime' })
  fechaAlta: Date;

  @Column({ name: 'DFECHA_BAJA', type: 'datetime', nullable: true })
  fechaBaja?: Date;
}
