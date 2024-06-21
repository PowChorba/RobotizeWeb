import { Module } from '@nestjs/common';
import { SuscribersService } from './suscribers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Suscribers, SuscribersSchema } from './suscribers.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Suscribers.name, schema: SuscribersSchema}])],
  providers: [SuscribersService],
  exports: [SuscribersService]
})
export class SuscribersModule {}
