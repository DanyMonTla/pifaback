import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { TipoProgramaService } from './tipo-programa.service';
import { CreateTipoProgramaDto } from './dto/create-tipo-programa.dto';
import { UpdateTipoProgramaDto } from './dto/update-tipo-programa.dto';

@Controller('tipo-programa')
export class TipoProgramaController {
  constructor(private readonly service: TipoProgramaService) {}

  // 🔍 GET todos
  @Get()
  async findAll() {
    return this.service.findAll();
  }

  // 🔍 GET por ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.service.findById(Number(id));
  }

  // ➕ POST nuevo
  @Post()
  async create(@Body() dto: CreateTipoProgramaDto) {
    return this.service.create(dto);
  }

  // ✏️ PUT modificar
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateTipoProgramaDto,
  ) {
    const actualizado = await this.service.update(Number(id), dto);
    if (!actualizado) {
      throw new NotFoundException(`No se encontró el tipo programa con ID ${id}`);
    }
    return actualizado;
  }

  // 🚫 PATCH inhabilitar
  @Patch('estado/:id')
  async cambiarEstado(
    @Param('id') id: string,
    @Body() cambios: { bhabilitado: boolean; dfecha_baja?: string },
  ) {
    const actualizado = await this.service.cambiarEstado(Number(id), cambios);
    if (!actualizado) {
      throw new NotFoundException(`No se encontró el tipo programa con ID ${id}`);
    }
    return actualizado;
  }
}
