const Movie = require("./movies");
const axios = require("axios");

class Repository {
    constructor() {
        this.movies = [];
    }

    crearMovie({ title, year, director, duration, genre, rate, poster }) {
        const newMovie = new Movie(title, year, director, duration, genre, rate, poster)
        this.movies.push(newMovie);
    }

    crearCard(movie) {
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
            <p class="body2">Duracion: ${movie.duration}</p>
            <p class="body3">${movie.genre.join(', ')}</p>`;

        card.appendChild(titleMovie);
        card.appendChild(posterMovie);
        card.appendChild(descriptionCard);

        return card;
    }

    refresh() {
        const moviesConteiner = document.getElementById('moviesRecomendas');
        moviesConteiner.innerHTML = "";

        const htmlMovies = this.movies.map(movie => this.crearCard(movie));

        htmlMovies.forEach(card => moviesConteiner.appendChild(card));
    }

    addMovie() {
        const fetchMovies = async () => {
            try {
                const promise = await axios.get("http://localhost:3000/movies");
                const data = promise.data;
                data.forEach(movie => {
                    this.crearMovie(movie);
                });
                this.refresh();
            } catch (err) {
                console.error(err);
            };
        };

        fetchMovies();
    };

};

module.exports = Repository