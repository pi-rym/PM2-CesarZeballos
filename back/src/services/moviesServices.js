// aca se van a ejecutar las tareas que indica el controller. 
const axios = require("axios");
const Movie = require("../models/Movie");

module.exports = {
    getMovies: async () => {
      try {
        const data = await Movie.find();
        return data;
      } catch (err) { 
        throw new error(err)
      };
    },

    createMovie: async (movie) => {
      const newMovie = await Movie.create(movie);
      return newMovie;
    },

};
