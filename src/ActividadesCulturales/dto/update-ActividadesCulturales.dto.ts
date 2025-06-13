import { PartialType } from '@nestjs/mapped-types';
import { CreateActividadesCulturalesDto } from './create-ActividadesCulturales.dto';

export class UpdateActividadesCulturalesDto extends PartialType(CreateActividadesCulturalesDto) {}
