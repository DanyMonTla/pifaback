import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Frecuencia } from './frecuencia.entity';
import { CreateFrecuenciaDto } from './dto/create-frecuencia.dto';
import { UpdateFrecuenciaDto } from './dto/update-frecuencia.dto';

@Injectable()
export class FrecuenciaService {
  constructor(
    @InjectRepository(Frecuencia)
    private readonly frecuenciaRepository: Repository<Frecuencia>,
  ) {}

  findAll(): Promise<Frecuencia[]> {
    return this.frecuenciaRepository.find();
  }

  async findOne(id: number): Promise<Frecuencia> {
    const frecuencia = await this.frecuenciaRepository.findOne({ where: { nid_frecuencia: id } });
    if (!frecuencia) throw new NotFoundException('Frecuencia no encontrada');
    return frecuencia;
  }

  create(data: CreateFrecuenciaDto): Promise<Frecuencia> {
    const nueva = this.frecuenciaRepository.create(data);
    return this.frecuenciaRepository.save(nueva);
  }

  async update(id: number, data: UpdateFrecuenciaDto): Promise<Frecuencia> {
    const frecuencia = await this.findOne(id);
    Object.assign(frecuencia, data);
    return this.frecuenciaRepository.save(frecuencia);
  }

  async remove(id: number): Promise<void> {
    const frecuencia = await this.findOne(id);
    await this.frecuenciaRepository.remove(frecuencia);
  }
}
