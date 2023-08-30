import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { News, NewsSchema } from 'src/news/news.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name: News.name, schema: NewsSchema}])],
  providers: [SearchService],
  controllers: [SearchController]
})
export class SearchModule {}
