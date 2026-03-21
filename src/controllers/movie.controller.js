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

export const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findByIdAndDelete(id);
        if (!movie) {
            return res.status(404).json({
                success: false,
                message: "Movie does not exist",
                error: {}
            });
        }
        return res.status(200).json({
            success: true,
            error: {},
            message: "Successfully deleted movie",
            data: movie
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: err,
            data: {}
        })

    }
}

export const getMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findOne({ _id: id });


        if (!movie) {
            return res.status(404).json({
                success: false,
                message: "Movie does not exists",
                error: {}
            });
        }

        return res.status(200).json({
            success: true,
            message: "data fetched successfully",
            data: movie,
            error: {}
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            data: {},
            error: err
        })
    }
}