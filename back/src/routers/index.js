// aca definimos las rutas: 
// modulos que indicaran cuales son los ends points, 
// es decir, que aca se ponen los "/loquesea/" y va a llamar al controlador.

const {Router} = require("express");
const moviesRouter = require("./moviesRouter");

const router = Router();

router.use("/movies", moviesRouter);

module.exports = router;