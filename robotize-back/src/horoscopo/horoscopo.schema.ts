import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type HoroscopoDocument = HydratedDocument<Horoscopo>

@Schema()
export class Horoscopo {
    @Prop({unique: true})
    name: string

    @Prop()
    img: string

    @Prop()
    icon:string

    @Prop()
    personal: string

    @Prop()
    travel: string

    @Prop()
    money: string

    @Prop()
    career: string

    @Prop()
    health: string

    @Prop()
    emotions: string
}

export const HoroscopoSchema = SchemaFactory.createForClass(Horoscopo)