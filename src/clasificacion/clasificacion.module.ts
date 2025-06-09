import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clasificacion } from './clasificacion.entity';
import { ClasificacionService } from './clasificacion.service';
import { ClasificacionController } from './clasificacion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Clasificacion])],
  providers: [ClasificacionService],
  controllers: [ClasificacionController],
  exports: [TypeOrmModule],
})
export class ClasificacionModule {}
