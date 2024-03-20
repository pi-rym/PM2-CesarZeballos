const { Router } = require("express");
const { allMovies, addMovie } = require("../controllers");

const moviesRouter = Router();

moviesRouter.get("/", allMovies);
moviesRouter.post("/", addMovie);

module.exports = moviesRouter;