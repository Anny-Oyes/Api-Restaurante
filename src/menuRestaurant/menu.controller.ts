import { Delete, Patch, Body, Controller, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/menu.dto';


@Controller('menus')

export class MenuController {
    constructor(
        private readonly menuServiceRepo: MenuService
    ) {}
    
    @Post()
    create(@Body() menuDto: CreateMenuDto) {
        return this.menuServiceRepo.create(menuDto);
    }

    @Get()
    findAll() {
        return this.menuServiceRepo.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.menuServiceRepo.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id', ParseUUIDPipe) id: string) {
        return this.menuServiceRepo.remove(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() UpdateMenuDTO: CreateMenuDto,
    ) {
        return this.menuServiceRepo.update(id, UpdateMenuDTO);
    }
}