import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoCalculo } from './tipo-calculo.entity';
import { CreateTipoCalculoDto } from './dto/create-tipo-calculo.dto';
import { UpdateTipoCalculoDto } from './dto/update-tipo-calculo.dto';

@Injectable()
export class TipoCalculoService {
  constructor(
    @InjectRepository(TipoCalculo)
    private readonly tipoCalculoRepo: Repository<TipoCalculo>,
  ) {}

  findAll(): Promise<TipoCalculo[]> {
    return this.tipoCalculoRepo.find();
  }

  async findOne(id: number): Promise<TipoCalculo> {
    const tipo = await this.tipoCalculoRepo.findOne({ where: { nid_tipo_calculo: id } });
    if (!tipo) throw new NotFoundException('Tipo Cálculo no encontrado');
    return tipo;
  }

  async create(dto: CreateTipoCalculoDto): Promise<TipoCalculo> {
  const nuevo = this.tipoCalculoRepo.create(dto);
  return this.tipoCalculoRepo.save(nuevo);
}


  async update(id: number, data: UpdateTipoCalculoDto): Promise<TipoCalculo> {
    const tipo = await this.findOne(id);
    Object.assign(tipo, data);
    return this.tipoCalculoRepo.save(tipo);
  }

  async remove(id: number): Promise<void> {
    const tipo = await this.findOne(id);
    await this.tipoCalculoRepo.remove(tipo);
  }
}
