import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [ApiService],
  imports: [ConfigModule.forRoot()],
  controllers: [ApiController]
})
export class ApiModule {}
