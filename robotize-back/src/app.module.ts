import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DolarModule } from './dolar/dolar.module';
import { WeatherModule } from './weather/weather.module';
import { SearchModule } from './search/search.module';
import { HoroscopoModule } from './horoscopo/horoscopo.module';
import { config } from 'dotenv';
import { TagsModule } from './tags/tags.module';
config()
@Module({
  imports: [MongooseModule.forRootAsync({
    useFactory: () => ({
      uri: process.env.MONGODB
    })
  }),NewsModule, DolarModule, WeatherModule, SearchModule, HoroscopoModule, TagsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
