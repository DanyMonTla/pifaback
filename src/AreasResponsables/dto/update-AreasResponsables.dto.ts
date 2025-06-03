import { PartialType } from '@nestjs/mapped-types';
import { CreateAreaDto } from './create-AreasResponsables.dto';

export class UpdateAreaDto extends PartialType(CreateAreaDto) {}
