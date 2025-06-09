import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

// App general
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Módulos existentes
import { IndicadoresController } from './indicadores/indicadores.controller';
import { IndicadoresService } from './indicadores/indicadores.service';

import { IndicadoresModule } from './indicadores/indicadores.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProgramaPresupuestalModule } from './ProgramaPresupuestal/ProgramaPresupuestal.module';
import { RolesModule } from './roles/roles.module';
import { AreasResponsablesModule } from './AreasResponsables/AreasResponsables.module';
import { TipoProgramaModule } from './tipo-programa/tipo-programa.module';
import { FrecuenciaModule } from './frecuencia/frecuencia.module'; // <-- Agrega esto
import { TipoCalculoModule } from './tipo-calculo/tipo-calculo.module';
import { FuenteModule } from './fuente/fuente.module';
import { TipoIndicadorModule } from './tipo-indicador/tipo-indicador.module';
import { Clasificacion } from './clasificacion/clasificacion.entity';
import { ClasificacionModule } from './clasificacion/clasificacion.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306'),
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'yat123',
      database: process.env.DB_NAME || 'pifa1', // ← actualizado aquí
      synchronize: false,
      autoLoadEntities: true,
    }),
  
 

    IndicadoresModule,
    UsuariosModule,
    ProgramaPresupuestalModule,
    RolesModule,
    AreasResponsablesModule,
    TipoProgramaModule,
    FrecuenciaModule, // <-- Agrega aquí
    TipoCalculoModule,
    FuenteModule,
    TipoIndicadorModule,
    ClasificacionModule
  ],
  controllers: [AppController], // SOLO AppController aquí
  providers: [AppService], 
})
export class AppModule {}
