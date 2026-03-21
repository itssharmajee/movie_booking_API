import { Movie } from "../models/movie.model.js"
import { errorBodyResponse, successBodyResponse } from "../utils/response.js";


/**
 * this controller is used to create a movie
 * @param {*} req {name,description,casts,trailerUrl,language,releaseDate}
 * @returns it returns an object { }
 */
export const createMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body);

        return res.status(201).json({ ...successBodyResponse, data: movie, message: "Successfully created" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ ...errorBodyResponse, error: err });

    }
}

export const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findByIdAndDelete(id);
        if (!movie) {
            return res.status(404).json({ ...errorBodyResponse, message: "Movie does not exists for parcticular ID" });
        }
        return res.status(200).json({
            ...successBodyResponse,
            message: "Successfully deleted movie",
            data: movie
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ ...errorBodyResponse, error: err })

    }
}

export const getMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findOne({ _id: id });


        if (!movie) {
            return res.status(404).json({
                ...errorBodyResponse,
                message: "Movie does not exists for parcticular ID"
            });
        }

        return res.status(200).json({ ...successBodyResponse, data: movie });
    } catch (err) {
        return res.status(500).json({ ...errorBodyResponse, error: err })
    }
}

export const updateMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const updatingData = req.body;
        const movie = await Movie.findByIdAndUpdate(id, updatingData, { returnDocument: "after", runValidators: true });
        if (!movie) {
            return res.status(404).json({ ...errorBodyResponse, message: "Movie does not exist for a particular id" })
        }
        // as {new : true} is depricated so we are using { returnDocument:"after" } 
        // this will check all the validation before updating in the model -- { runValidators:true}
        return res.status(200).json({ ...successBodyResponse, message: "updated successfully", data: movie });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ ...errorBodyResponse, error: err.message })
    }
}

export const getAllMovies = async (req, res) => {
    try {
        const { name } = req.query;
        let query = {};
        if (name) {
            query.name = name;
        }
        const movies = await Movie.find(query);
        if (!movies || movies.length === 0) {
            return res.status(404).json({
                ...successBodyResponse, message: "Particular movie not found"
            })
        }

        return res.status(200).json({
            ...successBodyResponse,
            data: movies
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ ...errorBodyResponse, error: err.message })
    }
}