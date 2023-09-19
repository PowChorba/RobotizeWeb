import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { News } from 'src/news/news.schema';

@Injectable()
export class TagsService {
    constructor(@InjectModel(News.name) private newsModel: Model<News>){}

    async getTag(tag: string){
        tag = tag.replace('-', ' ')

        const findNews = await this.newsModel.find({
            tags: tag
        }).sort({createdAt: -1})

        if(findNews){
            return findNews
        }

        return [{title: 'No hay nada con ese tag'}]
    }
}
