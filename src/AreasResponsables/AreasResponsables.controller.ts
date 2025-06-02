import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';

import { AreasResponsablesService } from './AreasResponsables.service';
import { CreateAreaDto } from './dto/create-AreasResponsables.dto';
import { UpdateAreaDto } from './dto/update-AreasResponsables.dto';

@Controller('areas-responsables')
export class AreasResponsablesController {
  constructor(private readonly service: AreasResponsablesService) {}

  @Post()
  create(@Body() dto: CreateAreaDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const idNum = parseInt(id);
    if (isNaN(idNum)) throw new NotFoundException('ID inválido');
    return this.service.findOne(idNum);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAreaDto) {
    const idNum = parseInt(id);
    if (isNaN(idNum)) throw new NotFoundException('ID inválido');
    return this.service.update(idNum, dto);
  }

  @Patch('estado/:id')
  desactivar(@Param('id') id: string) {
    const idNum = parseInt(id);
    if (isNaN(idNum)) throw new NotFoundException('ID inválido');
    return this.service.remove(idNum); // Eliminación lógica
  }
}
