import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type HoroscopoDocument = HydratedDocument<Horoscopo>

@Schema()
export class Horoscopo {
    @Prop({unique: true})
    name: string

    @Prop()
    icon:string

    @Prop()
    title: string

    @Prop()
    content: string

}

export const HoroscopoSchema = SchemaFactory.createForClass(Horoscopo)