import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InidicadoresModule } from './inidicadores/inidicadores.module';
import { IndicadoresController } from './indicadores/indicadores.controller';
import { IndicadoresService } from './indicadores/indicadores.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    //TypeOrmModule.forRoot({
      //type: 'mariadb', //para concectar a mariadb
      //host: "localhost",
      //port: 5432,
      //username: "test",
      //password: "test",
      //database: "test",
      //synchronize: true,
     // entities: [__dirname + '/**/*.entity.ts' ],
    InidicadoresModule,
    UsuariosModule],
  controllers: [AppController, IndicadoresController],
  providers: [AppService, IndicadoresService],
})
export class AppModule {}
