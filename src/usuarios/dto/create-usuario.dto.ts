import {
  IsString,
  IsBoolean,
  IsDateString,
  IsOptional,
  IsInt,
  Length,
  MaxLength,
} from 'class-validator';

export class CreateUsuarioDto {
 
  @IsOptional() // opcional si es autogenerado
  @IsInt()
  idUsuario?: number;

  @IsString()
  @MaxLength(50)
  cnombre_usuario: string;

  @IsOptional()
  @IsString()
  @MaxLength(13)
  rfc?: string;


  @IsString()
  @MaxLength(25)
  capellido_p_usuario: string;

  @IsString()
  @MaxLength(25)
  capellido_m_usuario: string;

  @IsString()
  @MaxLength(20)
  ccargo_usuario: string;

  @IsString()
  @MaxLength(255) // Esto permite contraseñas encriptadas como bcrypt
  chashed_password: string;

  @IsInt()
  nid_area: number;

  @IsInt()
  nid_rol: number;

  @IsString()
  @MaxLength(10)
  @IsOptional()
  btitulo_usuario?: string;

  @IsBoolean()
  bhabilitado: boolean;

  @IsDateString() // Asegura que llegue como 'YYYY-MM-DD' o ISO date
  dfecha_alta: string;

  @IsDateString()
  @IsOptional()
  dfecha_baja?: string;

  
}