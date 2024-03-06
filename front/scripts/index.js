function crearCard(movie) {

    const card = document.createElement('div');
    const titleMovie = document.createElement('a');
    const posterMovie = document.createElement('img');
    const descriptionCard = document.createElement('div');

    card.classList.add('cardMovie');
    titleMovie.classList.add('titlemovie');
    descriptionCard.classList.add('descriptionBox');
    posterMovie.classList.add('poster');

    titleMovie.textContent = movie.title;
    posterMovie.src = movie.poster;
    descriptionCard.innerHTML = `
    <p class="body2">${movie.rate}</p>
    <p class="body2">${movie.year}</p>
    <p class="body2">Director: ${movie.director}</p>
    <p class="body2">Duracion: ${movie.year}</p>
    <p class="body3">${movie.genre.join(', ')}</p>`

    card.appendChild(titleMovie);
    card.appendChild(posterMovie);
    card.appendChild(descriptionCard);

    return card;
}

class Movie {
    constructor(title, year, director, duration, genre, rate, poster) {
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster;
    }
}

class Repository {
    constructor() {
        this.movies = [];
    }


    
    crearMovie({title, year, director, duration, genre, rate, poster}) {
        const newMovie = new Movie(title, year, director, duration, genre, rate, poster)
        this.movies.push(newMovie);
    }
}

const repository = new Repository;

const refresh = () => {
    const moviesConteiner = document.getElementById('moviesRecomendas');
    moviesConteiner.innerHTML = "";

    const movies = repository.movies;

    const htmlMovies = movies.map(movie => crearCard(movie));

    htmlMovies.forEach(card => moviesConteiner.appendChild(card)); 
}

const addMovie = () => {
    $.get(`https://students-api.2.us-1.fl0.io/movies`, (data, status) => {
        data.forEach(movie => {
            repository.crearMovie(movie);
            console.log(movie);
        })
        refresh();

    })
}

addMovie();
