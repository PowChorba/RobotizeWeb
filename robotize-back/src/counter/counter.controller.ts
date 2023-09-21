import { Controller, Get, Patch } from '@nestjs/common';
import { CounterService } from './counter.service';

@Controller('counter')
export class CounterController {
    constructor(private counterService: CounterService){}

    @Get()
    getCounter(){
        return this.counterService.getCounter()
    }

    @Patch()
    updateCounter(){
        return this.counterService.updateCounter()
    }
}
