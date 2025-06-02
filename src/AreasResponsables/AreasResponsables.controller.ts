import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
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

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAreaDto) {
    const idNum = parseInt(id);
    if (isNaN(idNum)) throw new NotFoundException('ID inválido');
    return this.service.update(idNum, dto);
  }

 @Patch('estado/:id')
async desactivar(@Param('id') id: string) {
  const idNum = parseInt(id);
  if (isNaN(idNum)) throw new NotFoundException('ID inválido');

  const area = await this.service.findOne(idNum);

  const dto: UpdateAreaDto = {
    bhabilitado: false,
    dfecha_baja: new Date().toISOString(),
    dfecha_alta: area.dfecha_alta?.toISOString(), // asegúrate que sea string
    cunidad_responsable: area.cunidad_responsable,
    creporta_a: area.creporta_a,
    ccorreo_electronico_ur: area.ccorreo_electronico_ur,
  };

  return this.service.update(idNum, dto);
}


}
