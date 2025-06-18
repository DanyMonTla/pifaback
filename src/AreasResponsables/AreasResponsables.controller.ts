import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Param,
  Body,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';

import { AreasResponsablesService } from './AreasResponsables.service';
import { CreateAreaDto } from './dto/create-AreaResponsable.dto';
import { UpdateAreaDto } from './dto/update-AreaResponsable.dto';

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
      dfecha_alta: area.dfecha_alta?.toISOString(),
      cunidad_responsable: area.cunidad_responsable,
      creporta_a: area.creporta_a,
      ccorreo_electronico_ur: area.ccorreo_electronico_ur,
    };

    return this.service.update(idNum, dto);
  }

  @Patch('reactivar/:id')
  async reactivar(@Param('id') id: string) {
    const idNum = parseInt(id);
    if (isNaN(idNum)) throw new NotFoundException('ID inválido');

    try {
      const result = await this.service.reactivar(idNum);
      return { message: 'Área reactivada correctamente', area: result };
    } catch (error) {
      console.error('❌ Error al reactivar área:', error);
      throw new InternalServerErrorException('No se pudo reactivar el área');
    }
  }
}
