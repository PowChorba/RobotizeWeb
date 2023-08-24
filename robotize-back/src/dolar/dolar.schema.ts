import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type DolarDocument = HydratedDocument<Dolar>

@Schema()
export class Dolar {
    @Prop()
    name: string

    @Prop()
    buy: string

    @Prop()
    sell: string
}

export const DolarSchema = SchemaFactory.createForClass(Dolar)