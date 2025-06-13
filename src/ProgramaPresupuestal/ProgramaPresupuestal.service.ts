import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProgramaPresupuestal } from './ProgramaPresupuestal.entity';
import { CreateProgramaPresupuestalDto } from './dto/create-ProgramaPresupuestal.dto';
import { UpdateProgramaPresupuestalDto } from './dto/update-ProgramaPresupuestal.dto';

@Injectable()
export class ProgramaPresupuestalService {
  constructor(
    @InjectRepository(ProgramaPresupuestal)
    private readonly repo: Repository<ProgramaPresupuestal>,
  ) {}

  async create(dto: CreateProgramaPresupuestalDto): Promise<ProgramaPresupuestal> {
    const nuevo = this.repo.create(dto);
    return this.repo.save(nuevo);
  }

  async findAll(): Promise<ProgramaPresupuestal[]> {
    const programas = await this.repo.find();

    // Transformar bit (Buffer) a boolean manualmente
    return programas.map(p => ({
      ...p,
      bhabilitado: Boolean(p.bhabilitado?.[0]), // convierte Buffer [1] a true
    }));
  }

  async findOne(id: number): Promise<ProgramaPresupuestal> {
    const programa = await this.repo.findOneBy({ nid_programa_presupuestal: id });
    if (!programa) {
      throw new NotFoundException(`Programa con ID ${id} no encontrado`);
    }
    return programa;
  }

  async update(id: number, dto: Partial<ProgramaPresupuestal>): Promise<ProgramaPresupuestal> {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repo.update(id, {
      bhabilitado: false,
      dfecha_baja: new Date(),
    } as any);
  }
}
