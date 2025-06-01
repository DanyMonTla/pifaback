import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fuente } from './fuente.entity';
import { CreateFuenteDto } from './dto/create-fuente.dto';
import { UpdateFuenteDto } from './dto/update-fuente.dto';

@Injectable()
export class FuenteService {
  constructor(
    @InjectRepository(Fuente)
    private readonly fuenteRepository: Repository<Fuente>,
  ) {}

  findAll(): Promise<Fuente[]> {
    return this.fuenteRepository.find();
  }

  async findOne(id: number): Promise<Fuente> {
    const fuente = await this.fuenteRepository.findOne({ where: { nid_fuente: id } });
    if (!fuente) throw new NotFoundException('Fuente no encontrada');
    return fuente;
  }

  create(data: CreateFuenteDto): Promise<Fuente> {
    const nueva = this.fuenteRepository.create(data);
    return this.fuenteRepository.save(nueva);
  }

  async update(id: number, data: UpdateFuenteDto): Promise<Fuente> {
    const fuente = await this.findOne(id);
    Object.assign(fuente, data);
    return this.fuenteRepository.save(fuente);
  }

  async remove(id: number): Promise<void> {
    const fuente = await this.findOne(id);
    await this.fuenteRepository.remove(fuente);
  }
}
