import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

// App general
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Módulos existentes
import { InidicadoresModule } from './inidicadores/inidicadores.module';
import { IndicadoresController } from './indicadores/indicadores.controller';
import { IndicadoresService } from './indicadores/indicadores.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProgramaPresupuestalModule } from './ProgramaPresupuestal/ProgramaPresupuestal.module';

// Nuevo módulo de roles
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306'),
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'yat123',
      database: process.env.DB_NAME || 'desa',
      synchronize: false,
      autoLoadEntities: true,
    }),
    InidicadoresModule,
    UsuariosModule,
    ProgramaPresupuestalModule,
    RolesModule, // ✅ Agregado aquí
  ],
  controllers: [AppController, IndicadoresController],
  providers: [AppService, IndicadoresService],
})
export class AppModule {}
