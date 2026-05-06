import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PraticaModule } from './pratica/pratica.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/sustentavel'),
    PraticaModule,
  ],
})
export class AppModule {}