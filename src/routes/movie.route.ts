import { Router } from 'express';
import movieController from '../controllers/movie.controller';
import movieValidator from '../validators/movie.validator';


export const movieRouter = Router()
    .get('/', movieController.getMovies)
    .get('/:id', movieController.getMovieById)
    .post('/',  movieValidator.addMovieValidator, movieController.addMovie);
