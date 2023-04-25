import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MenuImage } from './menu-image.entity';

@Entity()
export class Menu {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'text' })
    dish: string;

    @Column({ type: 'text' })
    category: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ type: 'numeric' })
    price: number;

    @Column({ type: 'text' })
    portionSize: string;

    @OneToMany(
        () => MenuImage, 
        (menuImage) => menuImage.menu, 
        {cascade: true}
    )
    images?: MenuImage[];
}
