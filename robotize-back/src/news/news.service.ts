import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { News } from './news.schema';
import { Model } from 'mongoose';
import { CreateNew, NewsSectionModel, NewsUpdatedModel } from 'src/type';

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
            pretitle: data.pretitle,
            tags: data.tags,
            publico: data.publico
        })
        news.save()
        return {"article":news, "status": "ok"}
    }

    async findNews(page: string){
        const limit = 27
        const skip = (parseInt(page) - 1) * limit

        const allNews = await this.newsModel.find().sort({createdAt: -1}).skip(skip).limit(limit).exec()

        return allNews
    }

    async findAll(){
        return this.newsModel.find()
    }

    async findNewsTitle(title:string){
        title = title.replaceAll('-', ' ')
        title = title.replace('.html', '')
        const news = await this.newsModel.findOne({
            // title: `/^${title}/`
            title: { $regex: `^${title}`, $options: 'i' }
        })
        if(news){

            return news
        }
        return {title:'News not found'}
    }

    async findNewsBySeccion(data: NewsSectionModel) {
        const limit = 10
        const skip = (parseInt(data.page) - 1) * limit

        if(data.section === 'rpa') {
            const allNews = await this.newsModel.find({section:data.section, publico: false}).sort({createdAt: -1}).skip(skip).limit(limit).exec()
            return allNews
        }
        else {
            const allNews = await this.newsModel.find({section:data.section, publico: true}).sort({createdAt: -1}).skip(skip).limit(limit).exec()
            if(allNews.length === 0){
                return [{title: 'No hay mas data'}]
            }
            return allNews
        }

    }

    async findNewsBySeccionHome(data: NewsSectionModel) {
        const limit = 14
        const skip = (parseInt(data.section) - 1) * limit

        if(data.section === 'rpa'){
            const allNews = await this.newsModel.find({section:data.section, publico: false}).sort({createdAt: -1}).skip(skip).limit(limit).exec()
            return allNews
        }
        else{
            const allNews = await this.newsModel.find({section:data.section, publico: true}).sort({createdAt: -1}).skip(skip).limit(limit).exec()
            return allNews
        }

        

    } 

    async findByKeyWork(keyword: string){
        const regex = new RegExp(keyword, 'i')
        const news = await this.newsModel.find({title: regex}).sort({createdAt: -1}).exec()
        if(news.length !== 0){
            return news
        }
        return [{title: 'No hay data'}]
    }

    async updateArticle(data: NewsUpdatedModel){
        await this.newsModel.updateOne({
            _id: data._id
        }, {
            $set: {
                title: data.title,
                summary: data.summary,
                content: data.content,
                img: data.img,
                date: data.date,
                section: data.section,
                tags: data.tags
            }
        })

        return 'updated'

    }

    async deleteNews(id: string) {
        try{
            console.log(id)
            const article = await this.newsModel.deleteOne({
                _id: id
            })
            console.log(article)
            return 'Deleted'
            
        }
        catch(e){
            return 'Error on Delete'
        }    
    }

    // async updateNewParameterInArticles(publico: boolean): Promise<void> {
    //     await this.newsModel.updateMany({}, { $set: { publico } }).exec();
    //   }
}
