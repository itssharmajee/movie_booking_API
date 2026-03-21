import express from "express";
import { createMovie, deleteMovie, getAllMovies, getMovie, updateMovie } from "../controllers/movie.controller.js";
import { validateMovieCreateRequest } from "../middlewares/movie.middleware.js";

export const movieRoutes = express.Router();

movieRoutes.post("/",validateMovieCreateRequest,createMovie);
movieRoutes.get("/",getAllMovies);
movieRoutes.get("/:id",getMovie);
movieRoutes.delete("/:id",deleteMovie);
movieRoutes.patch("/:id",updateMovie);
movieRoutes.put("/:id",updateMovie);