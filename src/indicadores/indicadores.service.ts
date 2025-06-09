import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Indicador } from './indicador.entity';
import { CreateIndicadorDto } from './dto/create-indicador.dto';
import { UpdateIndicadorDto } from './dto/update-indicador.dto';

@Injectable()
export class IndicadoresService {
  async cambiarEstado(id: number, bhabilitado: number): Promise<Indicador> {
  const record = await this.findOne(id);
  record.bhabilitado = Boolean(bhabilitado);
  return this.repo.save(record);
}

  constructor(
    @InjectRepository(Indicador)
    private readonly repo: Repository<Indicador>,
  ) {}

  async findAll() {
    return await this.repo.find();  // <---- SOLO USA "repo"
  }

  async findOne(id: number): Promise<Indicador> {
    const record = await this.repo.findOne({ where: { nid_indicador: id } });
    if (!record) throw new NotFoundException('Indicador no encontrado');
    return record;
  }

  create(data: CreateIndicadorDto): Promise<Indicador> {
    return this.repo.save(this.repo.create(data));
  }

  async update(id: number, data: UpdateIndicadorDto): Promise<Indicador> {
    const record = await this.findOne(id);
    Object.assign(record, data);
    return this.repo.save(record);
  }

  async remove(id: number): Promise<void> {
    const record = await this.findOne(id);
    await this.repo.remove(record);
  }
}
