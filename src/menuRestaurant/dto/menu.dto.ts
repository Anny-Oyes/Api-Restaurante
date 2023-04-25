import { IsString, IsNotEmpty, MinLength, IsNumber, IsArray, IsOptional } from 'class-validator';

export class CreateMenuDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    dish: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    category: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    description: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsString()
    @IsNotEmpty()
    portionSize: string;

    @IsString({ each: true })
    @IsArray()
    @IsOptional()
    images?: string[];
}