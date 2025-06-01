import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fuente } from './fuente.entity';
import { FuenteService } from './fuente.service';
import { FuenteController } from './fuente.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Fuente])],
  providers: [FuenteService],
  controllers: [FuenteController],
})
export class FuenteModule {}
