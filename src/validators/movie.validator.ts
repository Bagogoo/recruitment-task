import { body } from "express-validator";

const genresArray = ["Comedy",
    "Fantasy",
    "Crime",
    "Drama",
    "Music",
    "Adventure",
    "History",
    "Thriller",
    "Animation",
    "Family",
    "Mystery",
    "Biography",
    "Action",
    "Film-Noir",
    "Romance",
    "Sci-Fi",
    "War",
    "Western",
    "Horror",
    "Musical",
    "Sport"
]

const addMovieValidator = [
    body('genres').exists().isArray().isIn(genresArray).withMessage('Genre must be ' + genresArray),
    body('title').exists().withMessage('Title is required').isString().isLength({ max: 255 }).withMessage('Title must be less than 255 characters'),
    body('year').exists().withMessage('Year is required').isNumeric(),
    body('runtime').exists().withMessage('Runtime is required').isNumeric(),
    body('director').exists().withMessage('Director is required').isLength({ max: 255 }).withMessage('Title must be less than 255 characters'),
    body('actors').isString().optional(),
    body('posterUrl').isString().optional()
];

export default { addMovieValidator }