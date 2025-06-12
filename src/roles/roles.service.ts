import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from './roles.entity';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Rol)
    private readonly rolRepository: Repository<Rol>,
  ) {}

  async create(dto: CreateRolDto): Promise<Rol> {
  console.log('🛠 DTO recibido en create:', dto); // 👈 esto es clave
  const nuevoRol = this.rolRepository.create(dto);
  return this.rolRepository.save(nuevoRol);
}


  async findAll(): Promise<Rol[]> {
  return this.rolRepository.find(); // ✅ correcto
}

  async findOne(id: number): Promise<Rol> {
    const rol = await this.rolRepository.findOneBy({ nidRol: id });
    if (!rol) {
      throw new NotFoundException(`No se encontró el rol con ID ${id}`);
    }
    return rol;
  }

   async reactivar(id: number): Promise<void> {
  await this.rolRepository.update(id, {
    bhabilitado: true,
    dfechaBaja: null,
  } as any);
}



  async update(id: number, dto: UpdateRolDto): Promise<Rol> {
  const rol = await this.findOne(id);
  const actualizado = Object.assign(rol, dto);
  console.log('DTO recibido para actualización:', dto);
  return this.rolRepository.save(actualizado);
  }


  async cambiarEstado(id: number, estado: boolean): Promise<Rol> {
  const rol = await this.findOne(id);
  rol.bhabilitado = estado;
  rol.dfechaBaja = estado ? undefined : new Date();
  return this.rolRepository.save(rol);
}

}
