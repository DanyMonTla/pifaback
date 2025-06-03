import { PartialType } from '@nestjs/mapped-types';
import { CreateProgramaPresupuestalDto } from './create-ProgramaPresupuestal.dto';

export class UpdateProgramaPresupuestalDto extends PartialType(CreateProgramaPresupuestalDto) {}
