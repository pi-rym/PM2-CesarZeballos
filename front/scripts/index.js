console.log(tempData);

function crearCard(movie) {

    const card = document.createElement('div');
    const titleMovie = document.createElement('a');
    const posterMovie = document.createElement('img');
    const descriptionCard = document.createElement('div');
    const yearMovie = document.createElement('p');
    const directorMovie = document.createElement('p');
    const durationMovie = document.createElement('p');
    const genreMovie = document.createElement('p');
    const rateMovie = document.createElement('p');

    card.classList.add('cardMovie');
    titleMovie.classList.add('titlemovie');
    descriptionCard.classList.add('descriptionBox');
    posterMovie.classList.add('poster');
    yearMovie.classList.add('descriptionMovie');

    titleMovie.textContent = movie.title;
    posterMovie.src = movie.poster;
    yearMovie.textContent = movie.year;
    directorMovie.textContent = movie.director;
    durationMovie.textContent = movie.duration;
    genreMovie.textContent = movie.genre; // ojo aca que deberia ser distinto creo...
    rateMovie.textContent = movie.rate;
    
    card.appendChild(titleMovie);
    card.appendChild(posterMovie);
    card.appendChild(descriptionCard);
    descriptionCard.appendChild(yearMovie);
    descriptionCard.appendChild(directorMovie);
    descriptionCard.appendChild(durationMovie);
    descriptionCard.appendChild(genreMovie);
    descriptionCard.appendChild(rateMovie);

    return card;
}

const container = document.getElementById('moviesRecomendas');

const movies = tempData.map(movie => crearCard(movie));

movies.forEach(card => container.appendChild(card));














// function crearCard(tempData) {

//     const {title, year, director, duration, genre, rate, poster} = tempData;

//     const card = document.createElement('div');
//     const titleCard = document.createElement('a');
//     const directorCard = document.createElement('p');
//     const yearCard = document.createElement('p');
//     const durationCard = document.createElement('p');
//     const genreCard = document.createElement('p');
//     const rateCard = document.createElement('p');
//     const posterCard = document.createElement('img');

//     card.classList.add('cardMovie');
//     titleCard.classList.add('titlemovie');
//     directorCard.classList.add('descriptionMovie');
//     yearCard.classList.add('descriptionMovie');
//     durationCard.classList.add('descriptionMovie');
//     genreCard.classList.add('descriptionMovie');
//     rateCard.classList.add('descriptionMovie');
//     posterCard.classList.add('poster');

//     card.appendChild(titleCard);
//     card.appendChild(posterCard);
//     card.appendChild(directorCard);
//     card.appendChild(yearCard);
//     card.appendChild(durationCard);
//     card.appendChild(genreCard);
//     card.appendChild(rateCard);

//     return card;
// }

// function convertirMovie() {

//     const container = document.getElementById('moviesRecomendas');

//     const mapeo = tempData.map(movie => crearCard(movie));

//     mapeo.forEach(movies => {
//         container.appendChild(movies)
//     });
// }

// function mostrarMovies() {

//     const titleTemp = tempData
// }


//usar etiqueta <a hrf="..."> titulo </a>