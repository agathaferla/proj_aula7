import { Module } from '@nestjs/common';
import { PraticaController } from './pratica.controller';
import { PraticaService } from './pratica.service';

import { MongooseModule } from '@nestjs/mongoose';
import { Pratica, PraticaSchema } from './pratica.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Pratica.name, schema: PraticaSchema }
    ])
  ],
  controllers: [PraticaController],
  providers: [PraticaService]
})
export class PraticaModule {}