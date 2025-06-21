import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VinculacionAreaPrograma } from './VinculacionAreaPrograma.entity';
import { VinculacionAreaProgramaService } from './vinculacion-area-programa.service';
import { VinculacionAreaProgramaController } from './vinculacion-area-programa.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([VinculacionAreaPrograma]),
  ],
  providers: [VinculacionAreaProgramaService],
  controllers: [VinculacionAreaProgramaController],
})
export class VinculacionAreaProgramaModule {}
