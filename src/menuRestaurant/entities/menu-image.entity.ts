import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Menu } from './menu.entity';

@Entity()
export class MenuImage {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    url: string;

    @ManyToOne(
        () => Menu,
        (menu) => menu.images
        )
    menu: Menu;
}
