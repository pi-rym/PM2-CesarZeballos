const { Router } = require("express");
const { allMovies } = require("../controllers");

const moviesRouter = Router();

moviesRouter.get("/", allMovies);

module.exports = moviesRouter;