import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgramaPresupuestal } from './ProgramaPresupuestal.entity';
import { ProgramaPresupuestalService } from './ProgramaPresupuestal.service';
import { ProgramaPresupuestalController } from './ProgramaPresupuestal.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProgramaPresupuestal])],
  controllers: [ProgramaPresupuestalController],
  providers: [ProgramaPresupuestalService],
})
export class ProgramaPresupuestalModule {}
