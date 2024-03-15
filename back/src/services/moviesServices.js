// aca se van a ejecutar las tareas que indica el controller. 
const axios = require("axios");

module.exports = {
    getMovies: async () => {
      try {
        const { data } = await axios.get("https://students-api.up.railway.app/movies");
        return data;
      } catch (err) { 
        throw new error(error)
      };
    }
};
