export class CreateUsuarioDto {
  readonly idUsuario: string;
  readonly nombreUsuario: string;
  readonly apellidoPaterno: string;
  readonly apellidoMaterno: string;
  readonly cargoUsuario: string;
  readonly hashedPassword: string;
  readonly idArea: number;
  readonly idRol: number;
  readonly tituloUsuario?: string;
  readonly habilitado: boolean;
  readonly fechaAlta: Date;
  readonly fechaBaja?: Date;
}
