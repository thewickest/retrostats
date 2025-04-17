import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Retrostats API')
    .setDescription('An API documentation for the retrostats API')
    .setVersion('1.0')
    .addTag('retrostats')
    .build();

    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    app.enableCors();
  
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(3001);
}
bootstrap();
