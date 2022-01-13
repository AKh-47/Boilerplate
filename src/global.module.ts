import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';

@Global()
@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
    MongooseModule.forRoot('mongodb://localhost/nest-api'),
  ],
  exports: [JwtModule],
})
export class GlobalModule {}
