import { Controller, Get, Param } from '@nestjs/common';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
    constructor(private tagService: TagsService){}

    @Get(':tag')
    getNews(@Param('tag') tag:string){
        return this.tagService.getTag(tag)
    }
}
