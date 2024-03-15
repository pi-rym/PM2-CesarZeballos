// van a estar las funciones que van a establecer la LOGICA DEL NEGOCIO de cada una de las rutas. 
// OJO!!! no es quien lleva a cabo la accion.
const moviesServices = require("../services/moviesServices");

const allMovies = async (req, res) => {
    try {
        const movies = await moviesServices.getMovies();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({
            error: "Error interno del servidor",
        });
    };
};

module.exports = {
    allMovies,
}