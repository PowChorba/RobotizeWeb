import { Module } from '@nestjs/common';
import { CounterController } from './counter.controller';
import { CounterService } from './counter.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Counter, CounterSchema } from './counter.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Counter.name, schema: CounterSchema}])],
  controllers: [CounterController],
  providers: [CounterService]
})
export class CounterModule {}
