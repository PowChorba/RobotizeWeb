import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNew } from 'src/type';

@Controller('news')
export class NewsController {
    constructor(private newsService: NewsService){}

    @Post()
    createNews(@Body() createNew: CreateNew){
        return this.newsService.createNews(createNew)
    }

    @Get(':page')
    getNews(@Param('page') page:string){
        return this.newsService.findNews(page)
    }

    @Get('/article/:title')
    getNewsTitle(@Param('title') title: string){
        return this.newsService.findNewsTitle(title)
    }

    @Get('/:section/:page')
    getNewsBySection(@Param('section') section: string, @Param('page') page: string){
        return this.newsService.findNewsBySeccion({section,page})
    }

    @Get('/section/:section/:page')
    getNewsBySectionHome(@Param('section') section: string, @Param('page') page: string){
        return this.newsService.findNewsBySeccionHome({section,page})
    }

    @Get('/search')
    getSearchNews(@Query('keyword') keyword: string){
        return this.newsService.findByKeyWork(keyword)
    }

}
