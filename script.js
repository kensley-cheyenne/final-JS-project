let movies = [];
const searchInput = document.querySelector("#searchInput"); 
// sort //
function filterMovies(event) {
  const filter = event.target.value;
    if (filter === "NEW_TO_OLD") {
    movies = movies.sort(
      (a, b) => parseInt(b.Year.slice(0, 4)) - parseInt(a.Year.slice(0, 4))
    );
  } else if (filter === "OLD_TO_NEW") {
    movies = movies.sort(
      (a, b) => parseInt(a.Year.slice(0, 4)) - parseInt(b.Year.slice(0, 4))
    );
  }
  renderMovies(movies);
}
// search bar //
function searchKeyword(event) {
  searchInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      searchKeyword({ target: searchInput });
    }
  });

  searchInput.addEventListener("input", function(e) {
    if (!e.target.value) {
      renderMovies(movies);
    }
  });

  const keyword = event.target.value.toLowerCase();
  const filtered = movies.filter(movie =>
    movie.Title.toLowerCase().includes(keyword)
  );
  renderMovies(filtered);
}

const searchBtn = document.querySelector(".fa-search");
if (searchBtn) {
  searchBtn.addEventListener("click", function() {
    searchKeyword({ target: searchInput });
  });
}

const moviesWrapper = document.querySelector(".movies");
function renderMovies(movies) {
  if (!movies || movies.length === 0) {
    moviesWrapper.innerHTML = '<div class="no-matches">No matches</div>';
    return;
  }
  const moviesHTMLString = movies.map((movie) => moviesHTML(movie)).join("");
  moviesWrapper.innerHTML = moviesHTMLString;
}
// movies from API //
function moviesHTML(movie) {
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
}

async function getMovies(searchInput) {
  const response = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=d5c82cd3&s=${searchInput || "all"}`
  );
  const { Search : data } = await response.json();
  movies = data
  renderMovies(movies);
}
getMovies();