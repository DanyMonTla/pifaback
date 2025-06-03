import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
} from '@nestjs/common';
import { ProgramaPresupuestalService } from './ProgramaPresupuestal.service';
import { CreateProgramaPresupuestalDto } from './dto/create-ProgramaPresupuestal.dto';
import { UpdateProgramaPresupuestalDto } from './dto/update-ProgramaPresupuestal.dto';

@Controller('programa-presupuestal')
export class ProgramaPresupuestalController {
  constructor(private readonly service: ProgramaPresupuestalService) {}

  // Crear un nuevo programa
  @Post()
  create(@Body() dto: CreateProgramaPresupuestalDto) {
    return this.service.create(dto);
  }

  // Obtener todos los programas
  @Get()
  findAll() {
    return this.service.findAll();
  }

  // Obtener un programa por su ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  // Modificar un programa por ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProgramaPresupuestalDto) {
    return this.service.update(+id, dto);
  }

  // Desactivar un programa (solo cambia bhabilitado a false y asigna fecha de baja)
  @Patch('estado/:id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
