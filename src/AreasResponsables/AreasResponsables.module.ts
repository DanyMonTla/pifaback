import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AreaResponsable } from './AreasResponsables.entity';
import { AreasResponsablesService } from './AreasResponsables.service';
import { AreasResponsablesController } from './AreasResponsables.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AreaResponsable])],
  controllers: [AreasResponsablesController],
  providers: [AreasResponsablesService],
})
export class AreasResponsablesModule {}
