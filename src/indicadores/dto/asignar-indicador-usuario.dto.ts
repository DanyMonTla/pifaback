import { IsInt } from 'class-validator';

export class AsignarIndicadorUsuarioDto {
  @IsInt()
  nid_indicador: number;

  @IsInt()
  cid_usuario: number;
}
