import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { News } from 'src/news/news.schema';

@Injectable()
export class SearchService {
    constructor(@InjectModel(News.name) private newsModel: Model<News>){}

    async findByKeyWork(keyword: string){
        console.log(keyword, 'keyword')
        const regex = new RegExp(keyword, 'i')
        const news = await this.newsModel.find({title: regex}).sort({createdAt: -1}).exec()
        if(news.length !== 0){
            return news
        }
        return [{title: 'No hay data'}]
    }
}
