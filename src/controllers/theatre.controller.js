import { Theatre } from "../models/theatre.model.js"
import { errorBodyResponse, successBodyResponse } from "../utils/response.js";

export const createTheatre = async (req, res) => {

    try {
        const theatre = await Theatre.create(req.body);
        return res.status(201).json({ ...successBodyResponse, message: "theatre successfully created",data:theatre });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ ...errorBodyResponse, message:err.message });

    }
}