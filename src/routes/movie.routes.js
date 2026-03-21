import express from "express";
import { createMovie, deleteMovie, getMovie } from "../controllers/movie.controller.js";

export const movieRoutes = express.Router();

movieRoutes.post("/",createMovie);
movieRoutes.get("/:id",getMovie);
movieRoutes.delete("/:id",deleteMovie);