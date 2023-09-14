import { Injectable } from '@nestjs/common';
import { Horoscopo } from './horoscopo.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HoroscopoModel } from 'src/type';

@Injectable()
export class HoroscopoService {
    constructor(@InjectModel(Horoscopo.name) private horoscopoSchema: Model<Horoscopo>){}

    async createHoroscopo(data: HoroscopoModel){
        const newHoroscopo = await this.horoscopoSchema.create({
            name: data.name,
            icon: data.icon,
            personal: data.title,
            travel: data.content
        })

        return newHoroscopo.save()
    }

    async findAll(){
        return this.horoscopoSchema.find()
    }

    async updateHoroscopo(data: HoroscopoModel){
        const horoscopo = await this.horoscopoSchema.findOne({
            name: data.name
        })

        if(data.title) horoscopo.title = data.title
        if(data.content) horoscopo.content = data.content

        return horoscopo.save()
        
    }

    async getByName(name: string){
        const horoscopo = await this.horoscopoSchema.findOne({
            name: name
        })
        if(horoscopo){
            return horoscopo
        }
        return {name: 'No se encontro'}
    }
}
