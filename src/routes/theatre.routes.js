import express from "express";
import { validateTheatreCreateRequest } from "../middlewares/theatre.middleware.js";
import { createTheatre } from "../controllers/theatre.controller.js";

export const theatreRoutes = express.Router();

theatreRoutes.post("/", validateTheatreCreateRequest,createTheatre)