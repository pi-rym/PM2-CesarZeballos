const Repository = require("../models/repository");


const repository = new Repository();

// function addMovie(repository, refresh) {
//     $.get(`https://students-api.2.us-1.fl0.io/movies`, (data, status) => {
//         data.forEach(movie => {
//             repository.crearMovie(movie);
//             console.log(movie);
//         });
//         refresh();
//     });
// };

repository.addMovie();
