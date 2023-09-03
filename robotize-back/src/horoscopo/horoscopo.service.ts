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
            img: data.img,
            icon: data.icon,
            personal: data.personal,
            travel: data.travel,
            money: data.money,
            career: data.career,
            health: data.health,
            emotions: data.emotions
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

        if(data.personal) horoscopo.personal = data.personal
        if(data.travel) horoscopo.travel = data.travel
        if(data.money) horoscopo.money = data.money
        if(data.career) horoscopo.career = data.career
        if(data.health) horoscopo.health = data.health
        if(data.emotions) horoscopo.emotions = data.emotions

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
