import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepo: Repository<Usuario>,
  ) {}

  async create(dto: CreateUsuarioDto): Promise<any> {
    console.log("📥 DTO recibido en backend:", dto);

    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(dto.chashed_password, saltOrRounds);

    const nuevo = this.usuarioRepo.create({
      nombreUsuario: dto.cnombre_usuario,
      apellidoP: dto.capellido_p_usuario,
      apellidoM: dto.capellido_m_usuario,
      cargoUsuario: dto.ccargo_usuario,
      hashedPassword: hashedPassword,
      idArea: dto.nid_area,
      idRol: dto.nid_rol,
      tituloUsuario: dto.btitulo_usuario,
      rfc: dto.rfc,
      habilitado: dto.bhabilitado ?? true,
      fechaAlta: dto.dfecha_alta && dto.dfecha_alta.trim() !== ''
        ? new Date(dto.dfecha_alta)
        : new Date(),
      fechaBaja: dto.dfecha_baja && dto.dfecha_baja.trim() !== ''
        ? new Date(dto.dfecha_baja)
        : null,
    });

    try {
      const guardado = await this.usuarioRepo.save(nuevo);
      console.log("✅ Usuario guardado:", guardado);
      return this.mapUsuario(guardado);
    } catch (err: any) {
      console.error("❌ Error al guardar usuario en la BD:", err);
      if (err.code === 'ER_DATA_TOO_LONG') {
        throw new BadRequestException('Uno de los campos excede el tama\u00f1o permitido.');
      }
      throw err;
    }
  }

  async findAll(): Promise<any[]> {
    const usuarios = await this.usuarioRepo.find({
      order: {
        idUsuario: 'ASC',
      },
    });
    return usuarios.map(this.mapUsuario);
  }

  async findOne(id: number): Promise<any> {
    const u = await this.usuarioRepo.findOneBy({ idUsuario: id });
    if (!u) return null;
    return this.mapUsuario(u);
  }

  async update(id: number, dto: UpdateUsuarioDto): Promise<any> {
    const usuario = await this.usuarioRepo.findOneBy({ idUsuario: id });
    if (!usuario) throw new NotFoundException(`Usuario ${id} no encontrado`);

    const fechaAlta = dto.dfecha_alta ? new Date(dto.dfecha_alta) : usuario.fechaAlta;
    const fechaBaja = dto.dfecha_baja ? new Date(dto.dfecha_baja) : usuario.fechaBaja;

    usuario.nombreUsuario = dto.cnombre_usuario ?? usuario.nombreUsuario;
    usuario.apellidoP = dto.capellido_p_usuario ?? usuario.apellidoP;
    usuario.apellidoM = dto.capellido_m_usuario ?? usuario.apellidoM;
    usuario.cargoUsuario = dto.ccargo_usuario ?? usuario.cargoUsuario;
    usuario.rfc = dto.rfc ?? usuario.rfc;

    if (dto.chashed_password) {
      usuario.hashedPassword = await bcrypt.hash(dto.chashed_password, 10);
    }

    usuario.idArea = dto.nid_area ?? usuario.idArea;
    usuario.idRol = dto.nid_rol ?? usuario.idRol;
    usuario.tituloUsuario = dto.btitulo_usuario ?? usuario.tituloUsuario;
    usuario.habilitado = dto.bhabilitado !== undefined ? dto.bhabilitado : usuario.habilitado;
    usuario.fechaAlta = fechaAlta;
    usuario.fechaBaja = fechaBaja;

    const guardado = await this.usuarioRepo.save(usuario);
    return this.mapUsuario(guardado);
  }

  async desactivar(id: number, cambios: { bhabilitado: boolean; dfecha_baja: string }): Promise<any> {
    const usuario = await this.usuarioRepo.findOneBy({ idUsuario: id });
    if (!usuario) throw new NotFoundException(`Usuario ${id} no encontrado`);

    usuario.habilitado = cambios.bhabilitado;
    usuario.fechaBaja = cambios.dfecha_baja ? new Date(cambios.dfecha_baja) : null;

    const guardado = await this.usuarioRepo.save(usuario);
    return this.mapUsuario(guardado);
  }

  async reactivar(id: number): Promise<any> {
    const usuario = await this.usuarioRepo.findOneBy({ idUsuario: id });
    if (!usuario) throw new NotFoundException(`Usuario ${id} no encontrado`);

    usuario.habilitado = true;
    usuario.fechaBaja = null;

    const guardado = await this.usuarioRepo.save(usuario);
    return this.mapUsuario(guardado);
  }

  async validarCredencialesPorRFC(rfc: string, password: string): Promise<boolean> {
    const usuario = await this.usuarioRepo.findOneBy({ rfc });
    if (!usuario) return false;
    return await bcrypt.compare(password, usuario.hashedPassword);
  }

  async findByRFC(rfc: string): Promise<any> {
    const usuario = await this.usuarioRepo.findOneBy({ rfc });
    if (!usuario) throw new NotFoundException(`Usuario con RFC ${rfc} no encontrado`);
    return this.mapUsuario(usuario);
  }

  private mapUsuario = (u: Usuario): any => ({
    cid_usuario: u.idUsuario,
    cnombre_usuario: u.nombreUsuario,
    capellido_p_usuario: u.apellidoP,
    capellido_m_usuario: u.apellidoM,
    ccargo_usuario: u.cargoUsuario,
    nid_area: u.idArea,
    nid_rol: u.idRol,
    btitulo_usuario: u.tituloUsuario,
    rfc: u.rfc,
    bhabilitado: !!u.habilitado,
    dfecha_alta: u.fechaAlta?.toISOString().slice(0, 16),
    dfecha_baja: u.fechaBaja?.toISOString().slice(0, 16) || '',
  });
}
