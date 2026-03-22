export const validateTheatreCreateRequest = async (req, res, next) => {
    const { name, location, contact, isActive } = req.body;

    const errorResponse = {
        success: false,
        message: "",
        error: "Bad Request || Malformed Request"
    };

    // Name
    if (!name) {
        return res.status(400).json({
            ...errorResponse,
            message: "Theatre name is required"
        });
    }

    // Location
    if (!location || typeof location !== "object") {
        return res.status(400).json({
            ...errorResponse,
            message: "Location is required"
        });
    }

    if (!location.address) {
        return res.status(400).json({
            ...errorResponse,
            message: "Address is required"
        });
    }

    if (!location.city) {
        return res.status(400).json({
            ...errorResponse,
            message: "City is required"
        });
    }

    if (!location.state) {
        return res.status(400).json({
            ...errorResponse,
            message: "State is required"
        });
    }

    if (location.pincode && !/^[0-9]{6}$/.test(location.pincode)) {
        return res.status(400).json({
            ...errorResponse,
            message: "Pincode must be 6 digits"
        });
    }

    // Contact (optional)
    if (contact) {
        if (typeof contact !== "object") {
            return res.status(400).json({
                ...errorResponse,
                message: "Contact must be an object"
            });
        }

        if (contact.phone && !/^[0-9]{10}$/.test(contact.phone)) {
            return res.status(400).json({
                ...errorResponse,
                message: "Phone must be 10 digits"
            });
        }

        if (contact.email && !/^\S+@\S+\.\S+$/.test(contact.email)) {
            return res.status(400).json({
                ...errorResponse,
                message: "Invalid email format"
            });
        }
    }

    // isActive
    if (isActive !== undefined && typeof isActive !== "boolean") {
        return res.status(400).json({
            ...errorResponse,
            message: "isActive must be true or false"
        });
    }

    next();
};