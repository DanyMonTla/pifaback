import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // ¡Muy importante para Next.js!
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
