import { Body, Controller, Post } from '@nestjs/common';
import { SuscribersService } from './suscribers.service';
import { CreateSuscriber } from 'src/type';

@Controller('suscribers')
export class SuscribersController {
    constructor(private subscriberService: SuscribersService){}
    
    @Post()
    createSub(@Body() createSub: CreateSuscriber){
        return this.subscriberService.createSusciber(createSub)
    }
}
