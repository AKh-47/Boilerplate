import { Module } from '@nestjs/common';
import { GlobalModule } from 'src/global.module';
import { AuthModule } from '../auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [GlobalModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
