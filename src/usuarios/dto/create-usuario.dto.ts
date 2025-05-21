import { IsString, IsInt, IsBoolean, IsOptional, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUsuarioDto {


  @IsString()
  readonly nombreUsuario: string;

  @IsString()
  readonly apellidoPaterno: string;

  @IsString()
  readonly apellidoMaterno: string;

  @IsString()
  readonly cargoUsuario: string;

  @IsString()
  readonly hashedPassword: string;

  @IsInt()
  readonly idArea: number;

  @IsInt()
  readonly idRol: number;

  @IsOptional()
  @IsString()
  readonly tituloUsuario?: string;

  @IsBoolean()
  readonly habilitado: boolean;

  @Type(() => Date)
  @IsDate()
  readonly fechaAlta: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  readonly fechaBaja?: Date;
}
