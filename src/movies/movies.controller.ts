import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, Res } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entites/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {  }
    
    @Get() 
    getAll(@Req() req, @Res() res): Movie[] {
        // It is not recommended to use req or res directly
        // Because NestJS runs on both of  2 frameworks(Express, Fastify) => Don't use fastify or express DIRECTLY
        return this.moviesService.getAll();
    }

    // @Get("/search")
    // search(@Query('year') serachingYear: string) {
    //     return `We are searching for a movie made after: ${serachingYear}`;
    // }

    @Get('/:id')
    getOne(@Param('id') movieId: number): Movie {
        console.log(typeof movieId);
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto) {
        return this.moviesService.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') movieId: number) {
        return this.moviesService.deleteOne(movieId);
    }

    @Patch('/:id')
    patchMovie(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
        return this.moviesService.update(movieId, updateData);
    }
}
``
// #2.0 Movies Controller