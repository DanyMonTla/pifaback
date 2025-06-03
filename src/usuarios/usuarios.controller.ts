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
<<<<<<< HEAD
  constructor(private readonly usuariosService: UsuariosService) {}

@Post()
create(@Body() createUsuarioDto: CreateUsuarioDto) {
  console.log('Petición recibida:', createUsuarioDto); // 👈
  return this.usuariosService.create(createUsuarioDto);
}

=======
  constructor(private readonly service: UsuariosService) {}
>>>>>>> origin/5pantallas-conectadas

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
    return this.service.update(id, dto);
  }

  @Patch(':id')
  async patchUsuario(
    @Param('id') id: string,
    @Body() dto: Partial<UpdateUsuarioDto>
  ) {
    return this.service.update(id, dto);
  }

  @Patch('estado/:id') 
  async desactivar(
    @Param('id') id: string,
    @Body() cambios: { bhabilitado: boolean; dfecha_baja: string }
  ) {
    return this.service.desactivar(id, cambios);
  }
}
