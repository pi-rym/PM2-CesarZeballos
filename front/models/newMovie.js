const axios = require("axios");
const Movie = require("./movies")

const genres = ["Action", "Adventure", "Comedy", "Fantasy", "Sci-Fi", "Drama"];

const agregar = document.getElementById('agregar');
const clean = document.getElementById('clean');

const title = document.getElementById('title');
const year = document.getElementById('year');
const director = document.getElementById('director');
const duration = document.getElementById('duration');
const optionGenres = document.getElementById('options');
const rate = document.getElementById('rate');
const poster = document.getElementById('poster');

function renderGenres() {
    optionGenres.innerHTML = ' '

    for (const genre of genres) {
        const input = document.createElement('input');
        const label = document.createElement('label');

        input.type = "checkbox"
        input.id = genre
        input.name = "genre[]"
        input.value = genre
        
        label.htmlFor = genre
        label.textContent = genre;

        optionGenres.appendChild(input)
        optionGenres.appendChild(label)
    }

    return optionGenres;
};

function validarCheckboxes() {
    const checkboxes = document.querySelectorAll('input[name="genre[]"]')

    for (const item of checkboxes) {
        if(item.checked){
            item.classList.add("selected")
            return true;
        }
    }
}

function handlerSubmit(event) {
    event.preventDefault()
    const genres = validarCheckboxes()

    if(![title.value, year.value, director.value, duration.value, poster.value, genres].every(Boolean)) return alert('Faltan campor por completar')

    const movie = new Movie(title.value, year.value, director.value, duration.value, arrayGenres(), rate.value, poster.value);

    postMovie(movie);

    return alert('Pelicula agregada')
}

function cleanInputs() {
    title.value = ' '
    year.value = ' '
    director.value = ' '
    duration.value = ' '
    rate.value = ' '
    poster.value = ' '

    const checkboxes = document.querySelectorAll('input[name="genre[]"]')

    for (const item of checkboxes) {
        item.checked = false;
        item.classList.remove('selected')
    }
}

renderGenres()

function arrayGenres() {
    const checkboxes = document.querySelectorAll('input[name="genre[]"]')
    const genres = [];

    for (const item of checkboxes) {
        if(item.checked){
            item.classList.add("selected")
            genres.push(item.id);
        }
    }

    return genres;
}

const postMovie = async (movie) => {
    try {
        const promise = await axios.post("http://localhost:3000/movies", movie);
        console.log(promise)
    } catch (err) {
        console.error(err);
    }
}

agregar.addEventListener('click', handlerSubmit);
clean.addEventListener('click', cleanInputs);