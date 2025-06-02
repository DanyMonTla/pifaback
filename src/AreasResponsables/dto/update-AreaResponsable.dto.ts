import { PartialType } from '@nestjs/mapped-types';
import { CreateAreaDto } from './create-AreaResponsable.dto';

export class UpdateAreaDto extends PartialType(CreateAreaDto) {}
