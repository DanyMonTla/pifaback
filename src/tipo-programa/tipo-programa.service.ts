import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoPrograma } from './tipo-programa.entity';
import { CreateTipoProgramaDto } from './dto/create-tipo-programa.dto';
import { UpdateTipoProgramaDto } from './dto/update-tipo-programa.dto';

@Injectable()
export class TipoProgramaService {
  constructor(
    @InjectRepository(TipoPrograma)
    private readonly tipoRepo: Repository<TipoPrograma>,
  ) {}

  private parseBooleanField(programa: TipoPrograma): TipoPrograma {
    return {
      ...programa,
      bhabilitado: !!(programa.bhabilitado as any)?.[0],
    };
  }

  async create(dto: CreateTipoProgramaDto): Promise<TipoPrograma> {
    const nuevo = this.tipoRepo.create(dto);
    return this.tipoRepo.save(nuevo);
  }

  async findAll(): Promise<TipoPrograma[]> {
    const registros = await this.tipoRepo.find();
    return registros.map(this.parseBooleanField);
  }

  async findById(id: number): Promise<TipoPrograma> {
    const encontrado = await this.tipoRepo.findOneBy({ nid_tipo_programa: id });
    if (!encontrado) throw new NotFoundException(`No se encontró el tipo programa con ID ${id}`);
    return this.parseBooleanField(encontrado);
  }

  async update(id: number, dto: UpdateTipoProgramaDto): Promise<TipoPrograma> {
    const encontrado = await this.findById(id);
    const actualizado = Object.assign(encontrado, dto);
    return this.tipoRepo.save(actualizado);
  }

  async cambiarEstado(id: number, cambios: { bhabilitado: boolean; dfecha_baja?: string }) {
    const programa = await this.findById(id);
    programa.bhabilitado = cambios.bhabilitado;
    programa.dfecha_baja = cambios.dfecha_baja ? new Date(cambios.dfecha_baja) : null;
    return this.tipoRepo.save(programa);
  }
}
