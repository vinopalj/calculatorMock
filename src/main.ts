

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { join } from 'path';


async function bootstrap() {
  const server = express();
  const port = process.env.PORT || 6000;
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(server),
  );

  app.enableCors();
  app.use('/public', express.static(join(__dirname, 'public')));

  await app.init();

  server.listen(port, () => {
    console.log('Nest application is running on port ' + port);
  });
}

bootstrap();
