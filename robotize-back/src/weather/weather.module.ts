import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { Weather, WeatherSchema } from './weather.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name: Weather.name, schema: WeatherSchema}])],
  providers: [WeatherService],
  controllers: [WeatherController]
})
export class WeatherModule {}
