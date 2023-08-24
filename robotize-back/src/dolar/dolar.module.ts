import { Module } from '@nestjs/common';
import { DolarService } from './dolar.service';
import { DolarController } from './dolar.controller';
import { Dolar, DolarSchema } from './dolar.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name: Dolar.name, schema: DolarSchema}])],
  providers: [DolarService],
  controllers: [DolarController]
})
export class DolarModule {}
