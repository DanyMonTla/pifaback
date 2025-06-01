import { Controller, Get, Post, Patch, Param, Body, Delete } from '@nestjs/common';
import { TipoIndicadorService } from './tipo-indicador.service';
import { CreateTipoIndicadorDto } from './dto/create-tipo-indicador.dto';
import { UpdateTipoIndicadorDto } from './dto/update-tipo-indicador.dto';

@Controller('tipo-indicador')
export class TipoIndicadorController {
  constructor(private readonly service: TipoIndicadorService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(Number(id));
  }

 @Post()
create(@Body() dto: CreateTipoIndicadorDto) {
  console.log('BODY que llega al backend:', dto);
  return this.service.create(dto);
}

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTipoIndicadorDto) {
    return this.service.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(Number(id));
  }
}
