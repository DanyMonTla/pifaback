import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  create(@Body() dto: CreateRolDto) {
    return this.rolesService.create(dto);
  }

  @Get()
  findAll() {
  return this.rolesService.findAll(); // ✅ debe retornar directamente
}

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.rolesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateRolDto) {
  return this.rolesService.update(id, dto);
}


 @Patch('estado/:id')
  cambiarEstado(
  @Param('id', ParseIntPipe) id: number,
  @Body('estado') estado: boolean,
) {
  return this.rolesService.cambiarEstado(id, estado);
}

@Patch('reactivar/:id')
reactivar(@Param('id') id: string) {
  return this.rolesService.reactivar(+id);
}


}
