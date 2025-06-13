import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post('login')
  async login(@Body() body: { cid_usuario: string; password: string }) {
    const { cid_usuario, password } = body;
    const esValido = await this.usuariosService.validarCredenciales(cid_usuario, password);

    if (!esValido) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    return { ok: true, mensaje: 'Inicio de sesión exitoso' };
  }
}
