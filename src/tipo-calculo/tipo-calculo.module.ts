import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoCalculo } from './tipo-calculo.entity';
import { TipoCalculoService } from './tipo-calculo.service';
import { TipoCalculoController } from './tipo-calculo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TipoCalculo])],
  providers: [TipoCalculoService],
  controllers: [TipoCalculoController],
})
export class TipoCalculoModule {}
