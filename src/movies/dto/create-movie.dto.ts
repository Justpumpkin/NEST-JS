import { IsNumber, IsOptional, IsString, isString } from 'class-validator';

export class CreateMovieDto {

    @IsString()
    readonly title: string;

    @IsNumber()
    readonly year: number;

    @IsOptional()
    @IsString({ each: true })
    readonly genres: string[];
}