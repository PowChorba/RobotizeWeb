import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';
import { MongooseModule } from '@nestjs/mongoose';
import { News, NewsSchema } from 'src/news/news.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: News.name, schema: NewsSchema}])],
  controllers: [TagsController],
  providers: [TagsService]
})
export class TagsModule {}
