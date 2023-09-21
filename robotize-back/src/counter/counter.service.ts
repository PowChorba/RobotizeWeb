import { Injectable } from '@nestjs/common';
import { Counter } from './counter.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CounterModel } from 'src/type';

@Injectable()
export class CounterService {
    constructor(@InjectModel(Counter.name) private counterSchema: Model<Counter>){}

    async createCounter(data: CounterModel) {
        const newCounter = await this.counterSchema.create({...data});
        return newCounter.save()
    }

    async getCounter(){
        return this.counterSchema.find({
            name: 'contadorNews'
        })
    }

    async updateCounter(){
        const counterNew = await this.counterSchema.findOne({
            name: 'counterNews'
        })

        counterNew.counter = counterNew.counter + 1
        return counterNew.save()
    }
}
