import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { FrecuenciaService } from './frecuencia.service';
import { CreateFrecuenciaDto } from './dto/create-frecuencia.dto';
import { UpdateFrecuenciaDto } from './dto/update-frecuencia.dto';
import { Frecuencia } from './frecuencia.entity';

@Controller('frecuencias')
export class FrecuenciaController {
  constructor(private readonly frecuenciaService: FrecuenciaService) {}

  @Get()
  findAll(): Promise<Frecuencia[]> {
    return this.frecuenciaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Frecuencia> {
    return this.frecuenciaService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateFrecuenciaDto): Promise<Frecuencia> {
    return this.frecuenciaService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateFrecuenciaDto): Promise<Frecuencia> {
    return this.frecuenciaService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.frecuenciaService.remove(id);
  }
}
