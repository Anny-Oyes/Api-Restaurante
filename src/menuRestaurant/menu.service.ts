import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './entities/menu.entity';
import { MenuImage } from './entities/menu-image.entity';
import { CreateMenuDto } from './dto/menu.dto';

@Injectable()
export class MenuService {
    constructor(
        @InjectRepository(Menu)
        private readonly menuRepository: Repository<Menu>,

        @InjectRepository(MenuImage)
        private readonly imageRepository: Repository<MenuImage>,
    ) {}
        
    async create(menuDto: CreateMenuDto) {
        const { images = [], ...detalleMenu } = menuDto;
        const menu = this.menuRepository.create({
            ...detalleMenu,
            images: images.map((image) => this.imageRepository.create({ url: image })),
        });        
        await this.menuRepository.save(menu)
        return menu;
        }

    findAll() {
        return this.menuRepository.find();
    }

    findOne(id: string) {
        return this.menuRepository.findOneBy({ id });
    }

    async remove(id: string){
        const menu = await this.findOne(id);
        await this.menuRepository.remove(menu);
        return 'El registro se a eliminado correctamente';
    }

    async update(id: string, cambios: CreateMenuDto) {
        const menu = await this.menuRepository.preload({
            id: id,
            ...cambios,
            images: [],
    });
    await this.menuRepository.save(menu);
    return menu;
    }
}
