import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Frecuencia } from './frecuencia.entity';
import { FrecuenciaService } from './frecuencia.service';
import { FrecuenciaController } from './frecuencia.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Frecuencia])],
  controllers: [FrecuenciaController],
  providers: [FrecuenciaService],
  exports: [FrecuenciaService],
})
export class FrecuenciaModule {}
