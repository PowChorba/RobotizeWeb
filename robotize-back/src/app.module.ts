import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DolarModule } from './dolar/dolar.module';
import { WeatherModule } from './weather/weather.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [MongooseModule.forRootAsync({
    useFactory: () => ({
      uri: 'mongodb+srv://powChorba:ity8FJpq3lyQmF2f@robotizenews.it5azy3.mongodb.net/'
    })
  }),NewsModule, DolarModule, WeatherModule, SearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
