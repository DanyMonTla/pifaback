import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Indicador } from './indicador.entity';
import { IndicadoresService } from './indicadores.service';
import { IndicadoresController } from './indicadores.controller';
import { IndicadorUsuario } from './indicador-usuario.entity';
import { IndicadorUsuarioService } from './indicador-usuario.service';
import { IndicadorUsuarioController } from './indicador-usuario.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Indicador, IndicadorUsuario])],
  providers: [IndicadoresService, IndicadorUsuarioService],
  controllers: [IndicadoresController, IndicadorUsuarioController],
})
export class IndicadoresModule {}
