import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InidicadoresModule } from './inidicadores/inidicadores.module';
import { IndicadoresController } from './indicadores/indicadores.controller';
import { IndicadoresService } from './indicadores/indicadores.service';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
  type: 'mariadb',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'pifa123',
  database: process.env.DB_NAME || 'desa',
  synchronize: false,
  autoLoadEntities: true,
}),

    InidicadoresModule,
    UsuariosModule,
  ],
  controllers: [AppController, IndicadoresController],
  providers: [AppService, IndicadoresService],
})
export class AppModule {}
