import { Controller, Post, Body, Delete, Param, Get } from '@nestjs/common';
import { IndicadorUsuarioService } from './indicador-usuario.service';
import { AsignarIndicadorUsuarioDto } from './dto/asignar-indicador-usuario.dto';

@Controller('indicador-usuario')
export class IndicadorUsuarioController {
  constructor(private readonly service: IndicadorUsuarioService) {}

  @Post('asignar')
  asignar(@Body() dto: AsignarIndicadorUsuarioDto) {
    return this.service.asignar(dto);
  }

  @Delete('desasignar/:nid_indicador/:cid_usuario')
  desasignar(
    @Param('nid_indicador') nid_indicador: number,
    @Param('cid_usuario') cid_usuario: number,
  ) {
    return this.service.desasignar(nid_indicador, cid_usuario);
  }

  // Alias para compatibilidad con el frontend
  @Delete('quitar/:nid_indicador/:cid_usuario')
  quitar(
    @Param('nid_indicador') nid_indicador: number,
    @Param('cid_usuario') cid_usuario: number,
  ) {
    return this.service.desasignar(nid_indicador, cid_usuario);
  }

  @Get('indicador/:nid_indicador')
  findByIndicador(@Param('nid_indicador') nid_indicador: number) {
    return this.service.findByIndicador(nid_indicador);
  }

  @Get('usuario/:cid_usuario')
  async findByUsuario(@Param('cid_usuario') cid_usuario: number) {
    // Devuelve SIEMPRE un array, aunque no haya asignaciones
    const asignaciones = (await this.service.findByUsuario(cid_usuario)) ?? [];
    if (!Array.isArray(asignaciones)) return [];
    return asignaciones.map(a => ({
      nid_indicador: a.nid_indicador,
      dfecha_asignacion: a.dfecha_asignacion,
      indicador: a.indicador ? {
        nid_indicador: a.indicador.nid_indicador,
        cclave_indicador: a.indicador.cclave_indicador,
        cdesc_indicador: a.indicador.cdesc_indicador,
      } : undefined
    }));
  }
}
