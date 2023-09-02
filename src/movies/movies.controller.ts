import {
  Controller,
  Body,
  Get,
  Post,
  Delete,
  Patch,
  Param,
  //   Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  //   @Get('/search')
  //   search(@Query('year') searchingYear: string) {
  //     return `We are searching for movie with a title : ${searchingYear}`;
  //   }

  @Get('/:id')
  getOne(@Param('id') id: number): Movie {
    console.log(typeof id);
    return this.moviesService.getOne(id);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.moviesService.deleteOne(id);
  }

  // update 할 때 필요
  @Patch('/:id')
  patch(@Param('id') id: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(id, updateData);
  }
}
