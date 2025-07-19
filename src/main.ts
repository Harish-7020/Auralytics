import * as config from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

config.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.APP_PORT ?? 3000);
}
bootstrap();
