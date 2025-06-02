import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepo: Repository<Usuario>,
  ) {}

  async create(dto: CreateUsuarioDto): Promise<Usuario> {
    const nuevo = this.usuarioRepo.create({
      idUsuario: dto.cid_usuario,
      nombreUsuario: dto.cnombre_usuario,
      apellidoP: dto.capellido_p_usuario,
      apellidoM: dto.capellido_m_usuario,
      cargoUsuario: dto.ccargo_usuario,
      hashedPassword: dto.chashed_password,
      idArea: dto.nid_area,
      idRol: dto.nid_rol,
      tituloUsuario: dto.btitulo_usuario,
      habilitado: dto.bhabilitado ?? true,
      fechaAlta: dto.dfecha_alta && dto.dfecha_alta.trim() !== ''
        ? new Date(dto.dfecha_alta)
        : new Date(),
      fechaBaja: dto.dfecha_baja && dto.dfecha_baja.trim() !== ''
        ? new Date(dto.dfecha_baja)
        : null,
    });

    const guardado = await this.usuarioRepo.save(nuevo);
    console.log("✅ Usuario guardado:", guardado);
    return guardado;
  }

  async findAll(): Promise<any[]> {
    const usuarios = await this.usuarioRepo.find();

    return usuarios.map((u) => ({
      cid_usuario: u.idUsuario,
      cnombre_usuario: u.nombreUsuario,
      capellido_p_usuario: u.apellidoP,
      capellido_m_usuario: u.apellidoM,
      ccargo_usuario: u.cargoUsuario,
      chashed_password: u.hashedPassword,
      nid_area: u.idArea,
      nid_rol: u.idRol,
      btitulo_usuario: u.tituloUsuario,
      bhabilitado: (u.habilitado as any)?.data
        ? (u.habilitado as any).data[0] === 1
        : Boolean(u.habilitado),
      dfecha_alta: u.fechaAlta?.toISOString().slice(0, 16),
      dfecha_baja: u.fechaBaja?.toISOString().slice(0, 16) || '',
    }));
  }

  async findOne(id: string): Promise<any> {
    const u = await this.usuarioRepo.findOneBy({ idUsuario: id });
    if (!u) return null;

    return {
      cid_usuario: u.idUsuario,
      cnombre_usuario: u.nombreUsuario,
      capellido_p_usuario: u.apellidoP,
      capellido_m_usuario: u.apellidoM,
      ccargo_usuario: u.cargoUsuario,
      chashed_password: u.hashedPassword,
      nid_area: u.idArea,
      nid_rol: u.idRol,
      btitulo_usuario: u.tituloUsuario,
      bhabilitado: u.habilitado,
      dfecha_alta: u.fechaAlta?.toISOString().slice(0, 16),
      dfecha_baja: u.fechaBaja?.toISOString().slice(0, 16) || '',
    };
  }

  async update(id: string, dto: UpdateUsuarioDto): Promise<Usuario> {
    try {
      const usuario = await this.usuarioRepo.findOneBy({ idUsuario: id });
      if (!usuario) throw new NotFoundException(`Usuario ${id} no encontrado`);

      const fechaAlta =
        dto.dfecha_alta && dto.dfecha_alta !== ''
          ? new Date(dto.dfecha_alta)
          : usuario.fechaAlta;
      const fechaBaja =
        dto.dfecha_baja && dto.dfecha_baja !== ''
          ? new Date(dto.dfecha_baja)
          : usuario.fechaBaja;

      usuario.nombreUsuario = dto.cnombre_usuario ?? usuario.nombreUsuario;
      usuario.apellidoP = dto.capellido_p_usuario ?? usuario.apellidoP;
      usuario.apellidoM = dto.capellido_m_usuario ?? usuario.apellidoM;
      usuario.cargoUsuario = dto.ccargo_usuario ?? usuario.cargoUsuario;
      usuario.hashedPassword = dto.chashed_password ?? usuario.hashedPassword;
      usuario.idArea = dto.nid_area ?? usuario.idArea;
      usuario.idRol = dto.nid_rol ?? usuario.idRol;
      usuario.tituloUsuario = dto.btitulo_usuario ?? usuario.tituloUsuario;
      usuario.habilitado =
        dto.bhabilitado !== undefined
          ? Boolean(dto.bhabilitado)
          : usuario.habilitado;
      usuario.fechaAlta = fechaAlta;
      usuario.fechaBaja = fechaBaja;

      console.log('📝 Guardando usuario actualizado:', usuario);
      return await this.usuarioRepo.save(usuario);
    } catch (err) {
      console.error('❌ Error interno al modificar usuario:', err);
      throw err;
    }
  }

  async desactivar(id: string): Promise<any> {
    const usuario = await this.usuarioRepo.findOneBy({ idUsuario: id });
    if (!usuario) throw new NotFoundException(`Usuario ${id} no encontrado`);

    usuario.habilitado = false;
    usuario.fechaBaja = new Date();

    const guardado = await this.usuarioRepo.save(usuario);

    return {
      cid_usuario: guardado.idUsuario,
      cnombre_usuario: guardado.nombreUsuario,
      capellido_p_usuario: guardado.apellidoP,
      capellido_m_usuario: guardado.apellidoM,
      ccargo_usuario: guardado.cargoUsuario,
      chashed_password: guardado.hashedPassword,
      nid_area: guardado.idArea,
      nid_rol: guardado.idRol,
      btitulo_usuario: guardado.tituloUsuario,
      bhabilitado: guardado.habilitado,
      dfecha_alta: guardado.fechaAlta?.toISOString().slice(0, 16),
      dfecha_baja: guardado.fechaBaja?.toISOString().slice(0, 16) || '',
    };
  }
}
