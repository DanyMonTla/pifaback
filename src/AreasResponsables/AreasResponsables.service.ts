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
    const area = await this.areaRepo.findOneBy({ nid_area: id });
    if (!area) {
      throw new NotFoundException(`No se encontró el área con ID ${id}`);
    }

    const actualizada = Object.assign(area, dto);
    return this.areaRepo.save(actualizada);
  }

  async remove(id: number): Promise<AreaResponsable> {
  const area = await this.areaRepo.findOneBy({ nid_area: id });
  if (!area) {
    throw new NotFoundException(`No se encontró el área con ID ${id}`);
  }

  area.bhabilitado = false;
  area.dfecha_baja = new Date();

  return this.areaRepo.save(area);
}

}
