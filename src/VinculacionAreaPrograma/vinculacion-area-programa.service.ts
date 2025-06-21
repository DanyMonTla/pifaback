import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VinculacionAreaPrograma } from './VinculacionAreaPrograma.entity';
import { CreateVinculacionAreaProgramaDto } from './dto/create-vinculacion-area-programa.dto';

@Injectable()
export class VinculacionAreaProgramaService {
  constructor(
    @InjectRepository(VinculacionAreaPrograma)
    private readonly repo: Repository<VinculacionAreaPrograma>,
  ) {}

  /**
   * Guarda un arreglo completo de vinculaciones.
   * - Valida que todas las vinculaciones tengan los campos requeridos.
   * - Inserta o actualiza automáticamente.
   */
  async guardarVinculaciones(
    vinculaciones: CreateVinculacionAreaProgramaDto[],
  ): Promise<VinculacionAreaPrograma[]> {
    if (!Array.isArray(vinculaciones)) {
      throw new BadRequestException('El cuerpo debe ser un arreglo de vinculaciones');
    }

    for (const v of vinculaciones) {
      if (
        typeof v.nid_area !== 'number' ||
        typeof v.nid_programa_presupuestal !== 'number'
      ) {
        throw new BadRequestException(
          'Cada vinculación debe incluir nid_area y nid_programa_presupuestal como números'
        );
      }
    }

    const nuevas = vinculaciones.map((v) => this.repo.create(v));
    return this.repo.save(nuevas);
  }

  /** Devuelve todas las vinculaciones actuales */
  async obtenerTodas(): Promise<VinculacionAreaPrograma[]> {
    return this.repo.find();
  }
}
