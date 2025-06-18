import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post('login')
async login(@Body() body: { rfc: string; password: string }) {
  const { rfc, password } = body;

  const esValido = await this.usuariosService.validarCredencialesPorRFC(rfc, password);
  if (!esValido) {
    throw new UnauthorizedException('Credenciales incorrectas');
  }

  const usuario = await this.usuariosService.findByRFC(rfc);
  return {
    ok: true,
    mensaje: 'Inicio de sesión exitoso',
    cnombre_usuario: usuario.cnombre_usuario,
    capellido_p_usuario: usuario.capellido_p_usuario,
  };
}

}