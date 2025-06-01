import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoIndicador } from './tipo-indicador.entity';
import { CreateTipoIndicadorDto } from './dto/create-tipo-indicador.dto';
import { UpdateTipoIndicadorDto } from './dto/update-tipo-indicador.dto';

@Injectable()
export class TipoIndicadorService {
  constructor(
    @InjectRepository(TipoIndicador)
    private readonly repo: Repository<TipoIndicador>,
  ) {}

  findAll(): Promise<TipoIndicador[]> {
    return this.repo.find();
  }

  async findOne(id: number): Promise<TipoIndicador> {
    const record = await this.repo.findOne({ where: { nid_tipo_indicador: id } });
    if (!record) throw new NotFoundException('Tipo de indicador no encontrado');
    return record;
  }

  create(data: CreateTipoIndicadorDto): Promise<TipoIndicador> {
  console.log('Objeto recibido en service:', data);
  const nuevo = this.repo.create(data);
  console.log('Objeto que se intenta guardar:', nuevo);
  return this.repo.save(nuevo);
}

  async update(id: number, data: UpdateTipoIndicadorDto): Promise<TipoIndicador> {
    const record = await this.findOne(id);
    Object.assign(record, data);
    return this.repo.save(record);
  }

  async remove(id: number): Promise<void> {
    const record = await this.findOne(id);
    await this.repo.remove(record);
  }
}
