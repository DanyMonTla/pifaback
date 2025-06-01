import { Controller, Get, Post, Patch, Body, Param } from '@nestjs/common';
import { TipoCalculoService } from './tipo-calculo.service';
import { CreateTipoCalculoDto } from './dto/create-tipo-calculo.dto';
import { UpdateTipoCalculoDto } from './dto/update-tipo-calculo.dto';


@Controller('tipo-calculo')
export class TipoCalculoController {
  constructor(private readonly service: TipoCalculoService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() dto: CreateTipoCalculoDto) {
    return this.service.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTipoCalculoDto) {
    return this.service.update(+id, dto);
  }
}
