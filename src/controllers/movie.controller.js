import { Movie } from "../models/movie.model.js"


/**
 * this controller is used to create a movie
 * @param {*} req {name,description,casts,trailerUrl,language,releaseDate}
 * @returns it returns an object { }
 */
export const createMovie = async (req, res) => {
    const {
        name,
        description,
        casts,
        trailerUrl,
        language,
        releaseDate
    } = req.body;

    if (!name || !description || !casts || !trailerUrl || !language || !releaseDate) {
        return res.status(400).json({
            success: false,
            message: "All required fields must be provided",
        });
    }

    try {
        const movie = await Movie.create({
            name, description, casts, trailerUrl, language, releaseDate
        })

        return res.status(201).json({
            success: true,
            message: "Successfully Created Movie",
            error: {},
            data: movie
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            error: err,
            data: {},
            message: "Something went wrong"
        })

    }
}