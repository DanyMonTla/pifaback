import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  private usuarios: CreateUsuarioDto[] = [];


  create(createUsuarioDto: CreateUsuarioDto) {
    this.usuarios.push(createUsuarioDto);
    return createUsuarioDto;
  }

  findAll() {
    return this.usuarios;
  }

  findOne(id: string) {
    return this.usuarios.find(u => u.idUsuario === id);
  }

  update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    const userIndex = this.usuarios.findIndex(u => u.idUsuario === id);
    if (userIndex === -1) return null;
    this.usuarios[userIndex] = { ...this.usuarios[userIndex], ...updateUsuarioDto };
    return this.usuarios[userIndex];
  }

  remove(id: string) {
    const userIndex = this.usuarios.findIndex(u => u.idUsuario === id);
    if (userIndex === -1) return null;
    const removed = this.usuarios.splice(userIndex, 1);
    return removed[0];
  }
}
