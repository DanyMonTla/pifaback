import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { IndicadoresModule } from './indicadores/indicadores.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { FrecuenciaModule } from './frecuencia/frecuencia.module'; // <-- Agrega esto
import { TipoCalculoModule } from './tipo-calculo/tipo-calculo.module';
import { FuenteModule } from './fuente/fuente.module';
import { TipoIndicadorModule } from './tipo-indicador/tipo-indicador.module';


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
      database: process.env.DB_NAME || 'pifa1',
      synchronize: false,
      autoLoadEntities: true,
    }),

    IndicadoresModule,
    UsuariosModule,
    FrecuenciaModule, // <-- Agrega aquí
    TipoCalculoModule,
    FuenteModule,
    TipoIndicadorModule,
  ],
  controllers: [AppController], // SOLO AppController aquí
  providers: [AppService], 
})
export class AppModule {}
