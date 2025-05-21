import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepo: Repository<Usuario>,
  ) {}

  async create(dto: CreateUsuarioDto): Promise<Usuario> {
    const nuevo = this.usuarioRepo.create(dto);
    return this.usuarioRepo.save(nuevo);
  }

  findAll(): Promise<Usuario[]> {
    return this.usuarioRepo.find();
  }

 findOne(id: string): Promise<Usuario | null> {
  return this.usuarioRepo.findOneBy({ idUsuario: id });
}


  async update(id: string, updateDto: UpdateUsuarioDto): Promise<Usuario | null> {
    const usuario = await this.usuarioRepo.findOneBy({ idUsuario: id });
    if (!usuario) return null;

    const actualizado = { ...usuario, ...updateDto };
    return this.usuarioRepo.save(actualizado);
  }

  async remove(id: string): Promise<Usuario | null> {
    const usuario = await this.usuarioRepo.findOneBy({ idUsuario: id });
    if (!usuario) return null;

    await this.usuarioRepo.remove(usuario);
    return usuario;
  }

  async actualizarEstado(id: string, nuevoEstado: string) {
    const usuario = await this.usuarioRepo.findOneBy({ idUsuario: id });
    if (!usuario) throw new Error('Usuario no encontrado');

    usuario.estado = nuevoEstado;
    await this.usuarioRepo.save(usuario);

    return { mensaje: 'Estado actualizado correctamente' };
}




}
