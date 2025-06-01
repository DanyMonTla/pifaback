import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoIndicador } from './tipo-indicador.entity';
import { TipoIndicadorService } from './tipo-indicador.service';
import { TipoIndicadorController } from './tipo-indicador.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TipoIndicador])],
  providers: [TipoIndicadorService],
  controllers: [TipoIndicadorController],
})
export class TipoIndicadorModule {}
