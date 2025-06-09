import { Controller, Get, Post, Patch, Param, Body, Delete, Put } from '@nestjs/common';
import { IndicadoresService } from './indicadores.service';
import { CreateIndicadorDto } from './dto/create-indicador.dto';
import { UpdateIndicadorDto } from './dto/update-indicador.dto';

@Controller('indicadores')
export class IndicadoresController {
  constructor(private readonly service: IndicadoresService) {}

  @Get()
  async findAll() {
    return this.service.findAll();  // <--- SOLO LLAMA AL SERVICE
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.service.findOne(Number(id));
  }

  @Post()
  create(@Body() dto: CreateIndicadorDto) {
    return this.service.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateIndicadorDto) {
    return this.service.update(Number(id), dto);
  }

  @Patch('estado/:id')
async cambiarEstado(@Param('id') id: string, @Body() body: { bhabilitado: number }) {
  return this.service.cambiarEstado(+id, body.bhabilitado);
}

  @Put(':id')
  replace(@Param('id') id: string, @Body() dto: UpdateIndicadorDto) {
    return this.service.update(+id, dto); // Que el update retorne el objeto actualizado
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(Number(id));
  }
}
