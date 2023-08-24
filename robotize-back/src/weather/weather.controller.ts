import { Body, Controller, Get, Patch, Post, Param } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherSchema } from 'src/type';

@Controller('weather')
export class WeatherController {
    constructor(private weatherService: WeatherService){}

    @Get()
    findAllWeather(){
        return this.weatherService.findAll()
    }

    @Patch()
    updateWeather(@Body() data: WeatherSchema){
        return this.weatherService.updateWeather(data)
    }

    @Post()
    createWeather(@Body() data:WeatherSchema){
        return this.weatherService.createOne(data)
    }

    @Get('/:city')
    findByCity(@Param('city') city: string){
        return this.weatherService.findByCity(city)
    }
}
