import { Controller, Post, Get, Body, HttpException, HttpStatus } from '@nestjs/common';
import { VinculacionAreaProgramaService } from './vinculacion-area-programa.service';
import { CreateVinculacionAreaProgramaDto } from './dto/create-vinculacion-area-programa.dto';
import { VinculacionAreaPrograma } from './VinculacionAreaPrograma.entity';

@Controller('vinculacion-area-programa')
export class VinculacionAreaProgramaController {
  constructor(private readonly service: VinculacionAreaProgramaService) {}

  @Post()
  async guardar(
    @Body() vinculaciones: CreateVinculacionAreaProgramaDto[],
  ): Promise<VinculacionAreaPrograma[]> {
    try {
      return await this.service.guardarVinculaciones(vinculaciones);
    } catch (error) {
      throw new HttpException(
        error.message || 'Error al guardar vinculaciones',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  async obtenerTodas(): Promise<VinculacionAreaPrograma[]> {
    try {
      return await this.service.obtenerTodas();
    } catch (error) {
      throw new HttpException(
        'Error al obtener vinculaciones',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
