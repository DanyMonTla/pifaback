import { PartialType } from '@nestjs/mapped-types';
import { CreateVinculacionAreaProgramaDto } from './create-vinculacion-area-programa.dto';

export class UpdateVinculacionAreaProgramaDto extends PartialType(CreateVinculacionAreaProgramaDto) {}
