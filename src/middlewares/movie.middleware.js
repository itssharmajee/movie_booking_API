export const validateMovieCreateRequest = async (req, res, next) => {
    const {
        name,
        description,
        casts,
        trailerUrl,
        language,
        releaseDate
    } = req.body;

    const errorResponse = {
        success: false,
        message: "",
        error: "Bad Request || Malformed Request"
    };

    // Name
    if (!name) {
        return res.status(400).json({
            ...errorResponse,
            message: "Movie name is required"
        });
    }

    // Description
    if (!description) {
        return res.status(400).json({
            ...errorResponse,
            message: "Description is required"
        });
    }

    // Casts
    if (!casts || !(casts instanceof Array) || casts.length === 0) {
        return res.status(400).json({
            ...errorResponse,
            message: "At least one cast member is required"
        });
    }

    // Trailer URL
    if (!trailerUrl) {
        return res.status(400).json({
            ...errorResponse,
            message: "Trailer URL is required"
        });
    }

    // Language
    if (!language) {
        return res.status(400).json({
            ...errorResponse,
            message: "Language is required"
        });
    }

    // Release Date
    if (!releaseDate) {
        return res.status(400).json({
            ...errorResponse,
            message: "Release date is required"
        });
    }

    next();
};