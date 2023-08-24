import { Injectable } from '@nestjs/common';
import { Weather } from './weather.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { WeatherSchema } from 'src/type';

@Injectable()
export class WeatherService {
    constructor(@InjectModel(Weather.name) private weatherModel: Model<Weather>){}

    async findAll(){
        return this.weatherModel.find()
    }

    async updateWeather(data: WeatherSchema){
        const weather = await this.weatherModel.findOne({
            city: data.city
        })

        if(data.description) weather.description = data.description
        if(data.actual_temp) weather.actual_temp = data.actual_temp
        if(data.min_temp) weather.min_temp = data.min_temp
        if(data.max_temp) weather.max_temp = data.max_temp

        return weather.save()
    
    }

    async createOne(data:WeatherSchema){
        const weather = new this.weatherModel({
            city: data.city,
            description : data.description,
            actual_temp: data.actual_temp,
            min_temp: data.min_temp,
            max_temp: data.max_temp,
            icon: data.icon
        })

        return weather.save()
    }

    async findByCity(city: string){
        const weather = await this.weatherModel.findOne({
            city: city
        })

        if(weather){
            return weather
        }
        return 'City not found'
    }

}
