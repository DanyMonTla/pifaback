import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IndicadorUsuario } from './indicador-usuario.entity';
import { AsignarIndicadorUsuarioDto } from './dto/asignar-indicador-usuario.dto';

@Injectable()
export class IndicadorUsuarioService {
  constructor(
    @InjectRepository(IndicadorUsuario)
    private readonly repo: Repository<IndicadorUsuario>,
  ) {}

  async asignar(dto: AsignarIndicadorUsuarioDto): Promise<IndicadorUsuario> {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  async desasignar(nid_indicador: number, cid_usuario: number): Promise<void> {
    await this.repo.delete({ nid_indicador, cid_usuario });
  }

  async findByIndicador(nid_indicador: number): Promise<IndicadorUsuario[]> {
    return this.repo.find({ where: { nid_indicador } });
  }

  async findByUsuario(cid_usuario: number): Promise<IndicadorUsuario[]> {
    return this.repo.find({
      where: { cid_usuario },
      relations: ['indicador'],
    });
  }
}
