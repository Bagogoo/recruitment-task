import fs from 'fs';
import { MoviesData, Movie } from '../typings/movie';


const getRandomMovie = async () => {
    const data = await readFile('./data/db.json');
    const numberOfMovies = Object.keys(data.movies).length;
    const randomId = (Math.floor((Math.random() * numberOfMovies) + 1));

    return data.movies.find(movie => movie.id === randomId);
}

const getMovieByDuration = async (duration: number) => {
    const data = await readFile('./data/db.json');
    const movie = data.movies.filter(movie => {
        return movie.runtime > (duration - 10) && movie.runtime < (duration + 10);
    });

    return movie[Math.floor(Math.random() * movie.length)];
}

const getMoviesByGenres = async (genres: string[]) => {
    const data = await readFile('./data/db.json');

    //I don't have time to do it as I should
    let moviesWithAtLeastOneCat: any = [];

    genres.forEach(genre => {
        moviesWithAtLeastOneCat.push(data.movies
            .filter(movie => movie.genres.includes(genre)));
    });

    return moviesWithAtLeastOneCat;
}

const getMoviesByGenresAndDuration = async (genres: string[], duration: number) => {
    const data = await readFile('./data/db.json');

    //I don't have time to do it as I should
    let moviesWithAtLeastOneCat: any = [];

    genres.forEach(genre => {
        moviesWithAtLeastOneCat.push(data.movies
            .filter(movie => movie.genres.includes(genre)
                && movie.runtime > (duration - 10) && movie.runtime < (duration + 10)));
    });

    return moviesWithAtLeastOneCat;
}

const getMovieById = async (id: number)  => {
    const data = await readFile('./data/db.json');

    return data.movies.find(movie => movie.id === id);
}

const addMovie = async (movieDto: Movie) => {
    const data = await readFile('./data/db.json');

    //increase id by 1
    movieDto.id = (data.movies[data.movies.length - 1].id) + 1;
    data.movies.push(movieDto);
    await writeFile('./data/db.json', data);
    return movieDto;
};

const readFile = async (path: string) => {
    const data = fs.readFileSync(path, 'utf8');
    const obj: MoviesData = JSON.parse(data);
    return obj;
};

const writeFile = async (path: string, data: MoviesData) => {
    const jsonString = JSON.stringify(data);
    fs.writeFile(path, jsonString, err => {
        if (err) {
            return { status: 'error', error: err };
        }
        return { status: 'succes' };
    });
};

export default { getMovieById, addMovie, getRandomMovie, getMovieByDuration, getMoviesByGenres, getMoviesByGenresAndDuration }