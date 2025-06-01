import { IsString, Length, IsOptional, IsBoolean } from 'class-validator';

export class CreateTipoIndicadorDto {
  @IsString()
  @Length(1, 15)
  ccolor_indicador: string;

  @IsOptional()
  @IsBoolean()
  bhabilitado?: boolean;
}
