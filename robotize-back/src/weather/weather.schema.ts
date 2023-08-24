import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type WeatherDocument = HydratedDocument<Weather>

@Schema()
export class Weather {
    @Prop({unique:true})
    city: string

    @Prop()
    description: string

    @Prop()
    actual_temp: string

    @Prop()
    max_temp: string

    @Prop()
    min_temp: string

    @Prop()
    icon: string
}

export const WeatherSchema = SchemaFactory.createForClass(Weather)