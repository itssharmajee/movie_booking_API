export const validateMovieCreateRequest = async (req, res, next) => {
    const {
        name,
        description,
        casts,
        trailerUrl,
        language,
        releaseDate
    } = req.body;

    const errors = [];
    const errorResponse = {
        success: false,
        message: "",
        error: "Bad Request || Malformed Request"
    }
    if (!name) {
        errors.push({ ...errorResponse, message: "Movie name is required" });
    }

    if (!description) {
        errors.push({ ...errorResponse, message: "Description is required" });
    }

    if (!casts || casts.length === 0 || !(casts instanceof Array)) {
        errors.push({ ...errorResponse, message: "At least one cast member is required" });
    }

    if (!trailerUrl) {
        errors.push({ ...errorResponse, message: "Trailer URL is required" });
    }

    if (!language) {
        errors.push({ ...errorResponse, message: "Language is required" });
    }

    if (!releaseDate) {
        errors.push({ ...errorResponse, message: "Release date is required" });
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors }
        );
    }

    next()
}