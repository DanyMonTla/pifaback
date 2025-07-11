import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IndicadorUsuario } from '../indicadores/indicador-usuario.entity';

@Entity('TBL_USUARIOS')
export class Usuario {
  @PrimaryGeneratedColumn({ name: 'CID_USUARIO', type: 'int' })
  cid_usuario: number;

  @OneToMany(() => IndicadorUsuario, iu => iu.usuario)
  indicadorUsuarios: IndicadorUsuario[];

  @Column({ name: 'CNOMBRE_USUARIO', length: 50 })
  nombreUsuario: string;

  @Column({ name: 'RFC', type: 'varchar', length: 13, nullable: true })
  rfc: string;

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

  @Column({name: 'BHABILITADO',type: 'bit',width: 1,default: () => '1',transformer: {to: (value: boolean) => value ? Buffer.from([1]) : Buffer.from([0]),from: (value: Buffer | number) => {if (Buffer.isBuffer(value)) return value[0] === 1;return !!value;},},})
  habilitado: boolean;

  @Column({ name: 'DFECHA_ALTA', type: 'datetime' })
  dfecha_alta: Date;

  @Column({ name: 'DFECHA_BAJA', type: 'datetime', nullable: true })
  dfecha_baja: Date | null;

  // ...otros campos y relaciones...
}