import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { DolarService } from './dolar.service';
import { CreateDolar } from 'src/type';

@Controller('dolar')
export class DolarController {
    constructor(private dolarService: DolarService){}

    @Post()
    createDolar(@Body() data: CreateDolar){
        return this.dolarService.createDolar(data)
    }

    @Get()
    findAllDolar(){
        return this.dolarService.findAll()
    }

    @Patch()
    updateDolar(@Body() data: CreateDolar){
        return this.dolarService.updateDolar(data)
    }
}
