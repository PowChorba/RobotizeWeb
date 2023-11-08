import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
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

    @Get()
    getAll(){
        return this.newsService.findAll()
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

    @Patch('/:id')
    updateArticle(@Param('id') id: number, @Body() body){
        return this.newsService.updateArticle(body)
    }

    @Delete('/:id')
    deleteArticle(@Param('id') id: string){
        return this.newsService.deleteNews(id);
    }

    // @Post('update-new-parameter')
    // async updateNewParameter(): Promise<void> {
    // const newParameter = true; // Set your desired default value
    // await this.newsService.updateNewParameterInArticles(newParameter);
//   }
}
