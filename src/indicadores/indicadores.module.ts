import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Indicador } from './indicador.entity';
import { IndicadoresService } from './indicadores.service';
import { IndicadoresController } from './indicadores.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Indicador])],
  providers: [IndicadoresService],
  controllers: [IndicadoresController],
})
export class IndicadoresModule {}
