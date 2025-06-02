import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly service: UsuariosService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const usuario = await this.service.findOne(id);
    if (!usuario) throw new NotFoundException(`Usuario ${id} no encontrado`);
    return usuario;
  }

  @Post()
  create(@Body() dto: CreateUsuarioDto) {
    console.log("📥 DTO recibido en POST /usuarios:", dto);
    return this.service.create(dto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateUsuarioDto) {
    const idNum = parseInt(id);
    if (isNaN(idNum)) throw new NotFoundException('ID inválido');
    return this.service.update(idNum, dto);
  }

  @Patch('estado/:id')
  async desactivar(@Param('id') id: string) {
    const idNum = parseInt(id);
    if (isNaN(idNum)) throw new NotFoundException('ID inválido');

    const usuario = await this.service.findOne(id);

    const dto: UpdateUsuarioDto = {
      bhabilitado: false,
      dfecha_baja: new Date().toISOString(),
      dfecha_alta: usuario.dfecha_alta, // corregido
      cnombre_usuario: usuario.cnombre_usuario,
      capellido_p_usuario: usuario.capellido_p_usuario,
      capellido_m_usuario: usuario.capellido_m_usuario,
      ccargo_usuario: usuario.ccargo_usuario,
      chashed_password: usuario.chashed_password,
      nid_area: usuario.nid_area,
      nid_rol: usuario.nid_rol,
      btitulo_usuario: usuario.btitulo_usuario,
    };

    return this.service.update(idNum, dto);
  }
}
