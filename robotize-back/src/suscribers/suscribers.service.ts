import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Suscribers } from './suscribers.schema';
import { Model } from 'mongoose';
import { CreateSuscriber } from 'src/type';

@Injectable()
export class SuscribersService {
    constructor(@InjectModel(Suscribers.name) private suscribersRespository: Model<Suscribers>){}

    async createSusciber(data: CreateSuscriber){
        const findEmail = await this.suscribersRespository.findOne({email: data.email})
        if(findEmail){
            return {status: 'fail', message: 'Email already registered', suscriber: null}
        }
        const newSuscriber = await new this.suscribersRespository({
            email: data.email,
            fullName: data.fullName
        })
        newSuscriber.save()
        return {status: 'success', message: 'Subscriber created successfully', suscriber: newSuscriber}
    }
}
