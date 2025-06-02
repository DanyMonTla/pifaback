import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AreaResponsable } from './AreasResponsables.entity';
import { CreateAreaDto } from './dto/create-AreasResponsables.dto';
import { UpdateAreaDto } from './dto/update-AreasResponsables.dto';

@Injectable()
export class AreasResponsablesService {
  constructor(
    @InjectRepository(AreaResponsable)
    private readonly areaRepo: Repository<AreaResponsable>,
  ) {}

  async create(dto: CreateAreaDto): Promise<AreaResponsable> {
    const nueva = this.areaRepo.create(dto);
    return this.areaRepo.save(nueva);
  }

  async findAll(): Promise<AreaResponsable[]> {
    return this.areaRepo.find();
  }

  async findOne(id: number): Promise<AreaResponsable> {
    const area = await this.areaRepo.findOneBy({ nid_area: id });
    if (!area) {
      throw new NotFoundException(`No se encontró el área con ID ${id}`);
    }
    return area;
  }

  async update(id: number, dto: UpdateAreaDto): Promise<AreaResponsable> {
  console.log('🛠️ Recibido en el backend:', { id, dto });

  const area = await this.areaRepo.findOneBy({ nid_area: id });
  if (!area) {
    throw new NotFoundException(`No se encontró el área con ID ${id}`);
  }

  // ✅ Asignar campo por campo, asegurando tipos
  if (dto.cunidad_responsable !== undefined) {
    area.cunidad_responsable = dto.cunidad_responsable;
  }
  if (dto.creporta_a !== undefined) {
    area.creporta_a = dto.creporta_a;
  }
  if (dto.ccorreo_electronico_ur !== undefined) {
    area.ccorreo_electronico_ur = dto.ccorreo_electronico_ur;
  }
  if (dto.dfecha_alta) {
    area.dfecha_alta = new Date(dto.dfecha_alta);
  }
  if (dto.dfecha_baja) {
    area.dfecha_baja = new Date(dto.dfecha_baja);
  }
  if (dto.bhabilitado !== undefined) {
    area.bhabilitado = dto.bhabilitado;
  }

  console.log('📝 Guardando área actualizada:', area);
  return this.areaRepo.save(area);
}
}