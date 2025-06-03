import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoPrograma } from './tipo-programa.entity';
import { TipoProgramaController } from './tipo-programa.controller';
import { TipoProgramaService } from './tipo-programa.service';

@Module({
  imports: [TypeOrmModule.forFeature([TipoPrograma])],
  controllers: [TipoProgramaController],
  providers: [TipoProgramaService],
})
export class TipoProgramaModule {}
