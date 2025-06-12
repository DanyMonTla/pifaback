import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // ✅ Importa esto

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(); // ¡Muy importante para Next.js!

  // ✅ Aplica validación y transformación global
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,               // 🔁 Convierte tipos como string → Date
      whitelist: true,               // 🧹 Ignora propiedades no definidas en DTOs
      forbidNonWhitelisted: true,    // ❌ Lanza error si hay propiedades extras
    }),
  );

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
