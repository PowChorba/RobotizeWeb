import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { News } from './news.schema';
import { Model } from 'mongoose';
import { CreateNew, NewsSectionModel } from 'src/type';

@Injectable()
export class NewsService {
    constructor(@InjectModel(News.name) private newsModel: Model<News>){}

    async createNews(data: CreateNew){
        const news = await new this.newsModel({
            title: data.title,
            subtitle: data.subtitle,
            content: data.content,
            img: data.img,
            date: data.date,
            section: data.section,
            keytitle: data.keytitle,
            pretitle: data.pretitle
        })

        return news.save()
    }

    async findNews(page: string){
        const limit = 27
        const skip = (parseInt(page) - 1) * limit

        const allNews = await this.newsModel.find().sort({createdAt: -1}).skip(skip).limit(limit).exec()

        return allNews
    }

    async findNewsTitle(title:string){
        const news = await this.newsModel.findOne({
            _id: title
        })

        if(news){
            return news
        }
        return 'News not found'
    }

    async findNewsBySeccion(data: NewsSectionModel) {
        const limit = 10
        const skip = (parseInt(data.page) - 1) * limit

        const allNews = await this.newsModel.find({section:data.section}).sort({createdAt: -1}).skip(skip).limit(limit).exec()
        if(allNews.length === 0){
            return [{title: 'No hay mas data'}]
        }
        return allNews

    }

    async findNewsBySeccionHome(data: NewsSectionModel) {
        const limit = 10
        const skip = (parseInt(data.section) - 1) * limit

        const allNews = await this.newsModel.find({section:data.section}).sort({createdAt: -1}).skip(skip).limit(limit).exec()

        return allNews

    } 

    async findByKeyWork(keyword: string){
        const regex = new RegExp(keyword, 'i')
        const news = await this.newsModel.find({title: regex}).sort({createdAt: -1}).exec()
        if(news.length !== 0){
            return news
        }
        return [{title: 'No hay data'}]
    }
}
