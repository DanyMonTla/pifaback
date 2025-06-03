import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoProgramaDto } from './create-tipo-programa.dto';

export class UpdateTipoProgramaDto extends PartialType(CreateTipoProgramaDto) {}
