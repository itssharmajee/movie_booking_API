import express from "express";
import { createMovie } from "../controllers/movie.controller.js";

export const movieRoutes = express.Router();

movieRoutes.post("/",createMovie);