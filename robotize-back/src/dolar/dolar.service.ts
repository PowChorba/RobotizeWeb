import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dolar } from './dolar.schema';
import { Model } from 'mongoose';
import { CreateDolar } from 'src/type';

@Injectable()
export class DolarService {
    constructor(@InjectModel(Dolar.name) private dolarSchema: Model<Dolar>){}

    async createDolar(data: CreateDolar){
        const newDolar = await this.dolarSchema.create({
            name: data.name,
            buy: data.buy,
            sell:data.sell
        })

        return newDolar.save()
    }

    async findAll(){
        return this.dolarSchema.find()
    }

    async updateDolar(data: CreateDolar){
        const dolar = await this.dolarSchema.findOne({
            name: data.name
        })

        if(data.buy) dolar.buy = data.buy
        if(data.sell) dolar.sell = data.sell

        return dolar.save()
        

    }
}
