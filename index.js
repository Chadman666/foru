const movieList = document.getElementById('movieList');
const movies = [
    { title: 'Movie 1', image: 'movie1.jpg' },
    { title: 'Movie 2', image: 'movie2.jpg' },
    { title: 'Movie 3', image: 'movie3.jpg' },
    { title: 'Movie 4', image: 'movie4.jpg' },
    { title: 'Movie 5', image: 'movie5.jpg' },
];

function displayMovies() {
    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-item';
        movieItem.innerHTML = `<img src="${movie.image}" alt="${movie.title}" /><p>${movie.title}</p>`;
        movieList.appendChild(movieItem);
    });
}

displayMovies();
