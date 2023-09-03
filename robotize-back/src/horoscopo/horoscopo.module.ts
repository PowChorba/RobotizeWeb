import { Module } from '@nestjs/common';
import { HoroscopoController } from './horoscopo.controller';
import { HoroscopoService } from './horoscopo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Horoscopo, HoroscopoSchema } from './horoscopo.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Horoscopo.name, schema: HoroscopoSchema}])],
  controllers: [HoroscopoController],
  providers: [HoroscopoService]
})
export class HoroscopoModule {}
