import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { HoroscopoService } from './horoscopo.service';
import { HoroscopoModel } from 'src/type';

@Controller('horoscopo')
export class HoroscopoController {
    constructor(private horoscopoService: HoroscopoService){}

    @Post()
    createHoroscopo(@Body() data: HoroscopoModel){
        return this.horoscopoService.createHoroscopo(data)
    }

    @Get()
    findAllHoroscopo(){
        return this.horoscopoService.findAll()
    }

    @Get(':name')
    findByName(@Param('name') name: string){
        return this.horoscopoService.getByName(name)
    }

    @Patch()
    updateHoroscopo(@Body() data: HoroscopoModel){
        return this.horoscopoService.updateHoroscopo(data)
    }
}
