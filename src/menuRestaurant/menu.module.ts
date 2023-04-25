import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './entities/menu.entity';
import { MenuImage } from './entities/menu-image.entity';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';

@Module({
    imports: [TypeOrmModule.forFeature([Menu, MenuImage])],
    controllers: [MenuController],
    providers: [MenuService],
})

export class MenuRestaurantModule {}
