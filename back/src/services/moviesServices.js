// aca se van a ejecutar las tareas que indica el controller. 
const axios = require("axios");
const Movie = require("../models/Movie");

module.exports = {
    getMovies: async () => {
      try {
        const data = await Movie.find();
        // const { data } = await axios.get("https://students-api.up.railway.app/movies");
        return data;
      } catch (err) { 
        throw new error(err)
      };
    }
};
