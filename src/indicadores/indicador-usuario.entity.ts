import { Entity, PrimaryColumn, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Indicador } from './indicador.entity';
import { Usuario } from '../usuarios/usuario.entity';

@Entity('tbl_indicador_usuarios')
export class IndicadorUsuario {
  @PrimaryColumn({ name: 'NID_INDICADOR', type: 'int' })
  nid_indicador: number;

  @PrimaryColumn({ name: 'CID_USUARIO', type: 'int' })
  cid_usuario: number;

  @CreateDateColumn({ name: 'DFECHA_ASIGNACION', type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  dfecha_asignacion: Date;

  @ManyToOne(() => Indicador, indicador => indicador.indicadorUsuarios, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'NID_INDICADOR' })
  indicador: Indicador;

  @ManyToOne(() => Usuario, usuario => usuario.indicadorUsuarios, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'CID_USUARIO' })
  usuario: Usuario;
}
