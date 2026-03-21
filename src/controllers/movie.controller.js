import { Movie } from "../models/movie.model.js"
import { errorBodyResponse, successBodyResponse } from "../utils/response.js";


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
        return res.status(400).json({ ...errorBodyResponse, message: "All required fields must be provided" });
    }

    try {
        const movie = await Movie.create({
            name, description, casts, trailerUrl, language, releaseDate
        })

        return res.status(201).json({ ...successBodyResponse, data: movie, message: "Successfully created" });
    } catch (err) {
        console.log(err);
        return res.status(500).json(errorBodyResponse);

    }
}

export const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findByIdAndDelete(id);
        if (!movie) {
            return res.status(404).json({ ...errorBodyResponse, message: "Movie does not exist" });
        }
        return res.status(200).json({
            ...successBodyResponse,
            message: "Successfully deleted movie",
            data: movie
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json(errorBodyResponse)

    }
}

export const getMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findOne({ _id: id });


        if (!movie) {
            return res.status(404).json({
                ...errorBodyResponse,
                message: "Movie does not exists"
            });
        }

        return res.status(200).json({ ...successBodyResponse, data: movie });
    } catch (err) {
        return res.status(500).json(errorBodyResponse)
    }
}