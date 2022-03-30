import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import movieService from '../services/movie.service';

const getMovies = async (req: Request, res: Response) => {
    if (!req.query.duration && !req.query.genres) {
        res.send(await movieService.getRandomMovie());
    }
    if (req.query.duration && req.query.genres) {
        let arr = JSON.parse(req.query.genres as string);
        res.send(await movieService.getMoviesByGenresAndDuration(arr,parseInt(req.query.duration as string)));
    }
    if (req.query.duration && !req.query.genres) {
        res.send(await movieService.getMovieByDuration(parseInt(req.query.duration as string)));
    }
    if (!req.query.duration && req.query.genres) {
        let arr = JSON.parse(req.query.genres as string);
        res.send(await movieService.getMoviesByGenres(arr));
    }
}
const getMovieById = async (req: Request, res: Response) => {
    res.send(await movieService.getMovieById(parseInt(req.params.id)));
}

const addMovie = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    res.send(await movieService.addMovie(req.body));
}

export default { getMovies, getMovieById, addMovie }