import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
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

  async create(dto: CreateUsuarioDto): Promise<any> {
    console.log("📥 DTO recibido en backend:", dto);

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

    try {
      const guardado = await this.usuarioRepo.save(nuevo);
      console.log("✅ Usuario guardado:", guardado);
      return this.mapUsuario(guardado);
    } catch (err: any) {
      console.error("❌ Error al guardar usuario en la BD:", err);
      if (err.code === 'ER_DATA_TOO_LONG') {
        throw new BadRequestException('Uno de los campos excede el tamaño permitido.');
      }
      throw err;
    }
  }

  async findAll(): Promise<any[]> {
    const usuarios = await this.usuarioRepo.find();
    return usuarios.map(this.mapUsuario);
  }

<<<<<<< HEAD
  findOne(id: string): Promise<Usuario | null> {
    return this.usuarioRepo.findOneBy({ idUsuario: Number(id) });
  }

  async update(id: string, updateDto: UpdateUsuarioDto): Promise<Usuario | null> {
    const usuario = await this.usuarioRepo.findOneBy({ idUsuario: Number(id) });
    if (!usuario) return null;
=======
  async findOne(id: string): Promise<any> {
    const u = await this.usuarioRepo.findOneBy({ idUsuario: id });
    if (!u) return null;
    return this.mapUsuario(u);
  }

  async update(id: string, dto: UpdateUsuarioDto): Promise<any> {
    const usuario = await this.usuarioRepo.findOneBy({ idUsuario: id });
    if (!usuario) throw new NotFoundException(`Usuario ${id} no encontrado`);

    const fechaAlta = dto.dfecha_alta ? new Date(dto.dfecha_alta) : usuario.fechaAlta;
    const fechaBaja = dto.dfecha_baja ? new Date(dto.dfecha_baja) : usuario.fechaBaja;

    usuario.nombreUsuario = dto.cnombre_usuario ?? usuario.nombreUsuario;
    usuario.apellidoP = dto.capellido_p_usuario ?? usuario.apellidoP;
    usuario.apellidoM = dto.capellido_m_usuario ?? usuario.apellidoM;
    usuario.cargoUsuario = dto.ccargo_usuario ?? usuario.cargoUsuario;
    usuario.hashedPassword = dto.chashed_password ?? usuario.hashedPassword;
    usuario.idArea = dto.nid_area ?? usuario.idArea;
    usuario.idRol = dto.nid_rol ?? usuario.idRol;
    usuario.tituloUsuario = dto.btitulo_usuario ?? usuario.tituloUsuario;
    usuario.habilitado = dto.bhabilitado !== undefined ? dto.bhabilitado : usuario.habilitado;
    usuario.fechaAlta = fechaAlta;
    usuario.fechaBaja = fechaBaja;

    console.log('📝 Guardando usuario actualizado:', usuario);
    const guardado = await this.usuarioRepo.save(usuario);
    return this.mapUsuario(guardado);
  }

  async desactivar(id: string, cambios: { bhabilitado: boolean; dfecha_baja: string }): Promise<any> {
  const usuario = await this.usuarioRepo.findOneBy({ idUsuario: id });
  if (!usuario) throw new NotFoundException(`Usuario ${id} no encontrado`);

  // 👇 Debug para asegurarte que estás recibiendo lo que esperas
  console.log("🛠 Cambios recibidos:", cambios);

  // 👇 Asegura que el valor false se respete
  usuario.habilitado = cambios.bhabilitado;

  // 👇 Guarda la fecha correctamente
  usuario.fechaBaja = cambios.dfecha_baja ? new Date(cambios.dfecha_baja) : null;

  const guardado = await this.usuarioRepo.save(usuario);

  // 👇 Confirma qué se va a guardar
  console.log("✅ Usuario guardado con:", {
    id: usuario.idUsuario,
    habilitado: usuario.habilitado,
    fechaBaja: usuario.fechaBaja,
  });

  return this.mapUsuario(guardado);
}


>>>>>>> origin/5pantallas-conectadas

  private mapUsuario = (u: Usuario): any => ({
  cid_usuario: u.idUsuario,
  cnombre_usuario: u.nombreUsuario,
  capellido_p_usuario: u.apellidoP,
  capellido_m_usuario: u.apellidoM,
  ccargo_usuario: u.cargoUsuario,
  chashed_password: u.hashedPassword,
  nid_area: u.idArea,
  nid_rol: u.idRol,
  btitulo_usuario: u.tituloUsuario,
  bhabilitado: typeof u.habilitado === 'boolean' ? u.habilitado : !!u.habilitado,
  dfecha_alta: u.fechaAlta?.toISOString().slice(0, 16),
  dfecha_baja: u.fechaBaja?.toISOString().slice(0, 16) || '',
});

<<<<<<< HEAD
  async remove(id: string): Promise<Usuario | null> {
    const usuario = await this.usuarioRepo.findOneBy({ idUsuario: Number(id) });
    if (!usuario) return null;
=======
>>>>>>> origin/5pantallas-conectadas

}
