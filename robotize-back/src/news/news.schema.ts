import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type NewsDocument = HydratedDocument<News>

@Schema({ timestamps: true})
export class News {
    @Prop({unique: true})
    title: string

    @Prop()
    keytitle: string

    @Prop()
    pretitle: string

    @Prop()
    subtitle: string

    @Prop()
    content:string

    @Prop()
    img: string

    @Prop()
    date:string

    @Prop()
    section: string

    @Prop()
    tags: string[]

}

export const NewsSchema = SchemaFactory.createForClass(News)