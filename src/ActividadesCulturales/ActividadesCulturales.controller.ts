import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ActividadesCulturalesService } from './ActividadesCulturales.services';
import { CreateActividadesCulturalesDto } from './dto/create-ActividadesCulturales.dto';
import { UpdateActividadesCulturalesDto } from './dto/update-ActividadesCulturales.dto';

@Controller('actividades-culturales')
export class ActividadesCulturalesController {
    constructor(private readonly service: ActividadesCulturalesService) {}

    @Get()
    findAll() {
    return this.service.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
    return this.service.findOne(id);
    }

    @Post()
    create(@Body() body: CreateActividadesCulturalesDto) {
    console.log('📥 Recibido en backend:', body); 
    return this.service.create(body);
}

    @Put(':id')
    update(@Param('id') id: number, @Body() body: UpdateActividadesCulturalesDto) {
    return this.service.update(id, body);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
    return this.service.remove(id);
    }
}
