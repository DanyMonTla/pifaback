import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoIndicadorDto } from './create-tipo-indicador.dto';

export class UpdateTipoIndicadorDto extends PartialType(CreateTipoIndicadorDto) {}
