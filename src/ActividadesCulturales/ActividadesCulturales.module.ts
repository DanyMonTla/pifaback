import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActividadesCulturales } from './ActividadesCulturales.entity';
import { ActividadesCulturalesService } from './ActividadesCulturales.services';
import { ActividadesCulturalesController } from './ActividadesCulturales.controller';

@Module({
    imports: [TypeOrmModule.forFeature([ActividadesCulturales])],
    controllers: [ActividadesCulturalesController],
    providers: [ActividadesCulturalesService],
})
export class ActividadesCulturalesModule {}
