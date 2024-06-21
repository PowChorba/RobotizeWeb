import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type SuscribersDocument = HydratedDocument<Suscribers>

@Schema({ timestamps: true})
export class Suscribers {
    @Prop()
    fullName: string

    @Prop({unique: true})
    email: string

}

export const SuscribersSchema = SchemaFactory.createForClass(Suscribers)
