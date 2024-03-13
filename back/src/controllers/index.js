// van a estar las funciones que van a establecer la LOGICA DEL NEGOCIO de cada una de las rutas. 
// OJO!!! no es quien lleva a cabo la accion.

const allMovies = (req, res) => {
    res.status(200).send("próximamente estarán disponibles los datos de películas.");
};

module.exports = {
    allMovies,
}