let movies;

async function renderMovies(filter) {
  const moviesWrapper = document.querySelector(".movies");
 
  if (!movies) {
    movies = await getMovies();
  }

  if (filter === 'NEW_TO_OLD') {
    movies.sort((a, b) => b.Year - a.Year);
  }
  else if (filter === 'OLD_TO_NEW') {
    movies.sort((a, b) => a.Year - b.Year);
  }

  const moviesHtml = movies
    .map((movie) => {
      return `<div class="movie">
                <figure class="movie__img__wrapper">
                  <img class="movie__img" src="${movie.Poster}" alt="">
                </figure>
                <div class="movie__title">
                  ${movie.Title}
                </div>
                <div class="movie__year">
                  ${movie.Year}
                </div>
              </div>`;
    })
    .join("");

 moviesWrapper.innerHTML = moviesHtml;
}

function filterMovies(event) {
  renderMovies(event.target.value);
}
setTimeout(() => {
  renderMovies();
});


const searchInput = document.querySelector("#searchInput");
const movieElements = document.querySelectorAll(".movies"); 

function renderMoviesAgain(searchTerm) { 
  searchTerm = searchInput.value.toLowerCase();
  searchInput.addEventListener('keyup', searchKeyword);

  for (let i = 0; i < movieElements.length; i++) {
    let movieElement = movieElements[i];
    if (movieElement.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
      movieElement.style.display = 'block';
    } else {
      movieElement.style.display = 'none';
    }
  }
}

function searchKeyword(event) {
  renderMoviesAgain(event.target.value);
}
renderMoviesAgain();


// FAKE DATA

function getMovies() {
 return new Promise(resolve => {
  setTimeout(() => {
    resolve ([
      {
        Title: "Crazy, Stupid, Love.",
        Year: "2011",
        imdbID: "tt1570728",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_SX300.jpg",
      },
      {
        Title: "Love Actually",
        Year: "2003",
        imdbID: "tt0314331",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYWRlZjcwYTgtYWJkOS00MGYwLTk3Y2ItNmU4NTg5Nzg2YTQ2XkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "The Addams Family",
        Year: "1991",
        imdbID: "tt0101272",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZWY0MzVlNGEtYzM1MC00OTI4LWE3ZTQtNWJjYzk2Y2MyNjVkXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Instant Family",
        Year: "2018",
        imdbID: "tt7401588",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZjM3NTYzYWItMzY0YS00NjliLTg3MzktYzZkM2Q5YTA5MDExXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Thor: Love and Thunder",
        Year: "2022",
        imdbID: "tt10648342",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZjRiMDhiZjQtNjk5Yi00ZDcwLTkyYTEtMDc1NjdmNjFhNGIzXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Love & Other Drugs",
        Year: "2010",
        imdbID: "tt0758752",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTgxOTczODEyMF5BMl5BanBnXkFtZTcwMDc0NDY4Mw@@._V1_SX300.jpg",
      },
      {
        Title: "The Family Man",
        Year: "2000",
        imdbID: "tt0218967",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BN2I4ODE3YzQtMzZhMy00YjhlLWE1MmMtYTA0MjkxNTJmMTZlXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "The Family",
        Year: "2013",
        imdbID: "tt2404311",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjE2MzI0MzkyNV5BMl5BanBnXkFtZTcwMjQ2MDM2OQ@@._V1_SX300.jpg",
      },
      {
        Title: "Addams Family Values",
        Year: "1993",
        imdbID: "tt0106220",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYWY3Y2ZkYjktZWYxMC00ZmZmLTgxNjYtYmMwYmU5OWJjMThjXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "P.S. I Love You",
        Year: "2007",
        imdbID: "tt0431308",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNTg2MDg4MjI5NV5BMl5BanBnXkFtZTcwMzQ0MDczMw@@._V1_SX300.jpg",
      },
      {
        Title: "I Love You, Man",
        Year: "2009",
        imdbID: "tt1155056",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTU4MjI5NTEyNV5BMl5BanBnXkFtZTcwNjQ1NTMzMg@@._V1_SX300.jpg",
      },
      {
        Title: "Fighting with My Family",
        Year: "2019",
        imdbID: "tt6513120",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYjliMDY3N2YtOTI2NS00MjQ0LWFjOGItMjQ1MzYyZGVlMDJiXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "The Family Stone",
        Year: "2005",
        imdbID: "tt0356680",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOWRjNzY1MmItNDUwNS00MGMzLWFkN2UtMTEzYjU4MmE2ZDAxXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Punch-Drunk Love",
        Year: "2002",
        imdbID: "tt0272338",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZTYyMTQ2MDAtMzYzYS00YjZiLWJiNDUtZjEwNzM4YzE1ZDhhXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Shakespeare in Love",
        Year: "1998",
        imdbID: "tt0138097",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYmM3MTllNzYtN2MzNS00NWQwLTk0NTEtNjY1MmMwYjNkNTE5XkEyXkFqcGc@._V1_SX300.jpg",
      },
    ]);
  }, 1000);
 })
} 
