import * as dotenv from 'dotenv';
dotenv.config(); // Charge le .env AVANT tout le reste

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // Crée l'application NestJS
  const app = await NestFactory.create(AppModule);
  
  // Active CORS pour autoriser ton front local et ton front sur Railway
  app.enableCors({
    origin: [
      "http://localhost:5173", // front en local
      "https://policeacademy-mr-production-256b.up.railway.app" // front en prod
    ]
  });

  // Applique les pipes de validation globalement
  app.useGlobalPipes(new ValidationPipe());

  // Port dynamique fourni par Railway, fallback à 3000 pour dev local
  const port = process.env.PORT || 3000;
  await app.listen(port);

  console.log(`🚀 Application is running on: ${await app.getUrl()}`);
}

bootstrap();