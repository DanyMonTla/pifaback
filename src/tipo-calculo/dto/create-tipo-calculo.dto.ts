import { IsString, MaxLength } from 'class-validator';

export class CreateTipoCalculoDto {
  @IsString()
  @MaxLength(100)
  ctipo_calculo: string;
}
