import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clasificacion } from './clasificacion.entity';

@Injectable()
export class ClasificacionService {
  constructor(
    @InjectRepository(Clasificacion)
    private readonly clasificacionRepo: Repository<Clasificacion>,
  ) {}

  findAll(): Promise<Clasificacion[]> {
    return this.clasificacionRepo.find({ order: { nid_clasificacion: 'ASC' } });
  }
}
