import { Controller, Get } from '@nestjs/common';
import { ClasificacionService } from './clasificacion.service';
import { Clasificacion } from './clasificacion.entity';

@Controller('clasificacion')
export class ClasificacionController {
  constructor(private readonly clasificacionService: ClasificacionService) {}

  @Get()
  findAll(): Promise<Clasificacion[]> {
    return this.clasificacionService.findAll();
  }
}
