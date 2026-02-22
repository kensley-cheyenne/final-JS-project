// let movies;
// const moviesWrapper = document.querySelector(".movies");
// const searchInput = document.querySelector("#searchInput"); 

// function filterMovies(event) {
//   const filter = event.target.value;
//     if (filter === "NEW_TO_OLD") {
//     movies = movies.sort(
//       (a, b) => parseInt(b.Year.slice(0, 4)) - parseInt(a.Year.slice(0, 4))
//     );
//   } else if (filter === "OLD_TO_NEW") {
//     movies = movies.sort(
//       (a, b) => parseInt(a.Year.slice(0, 4)) - parseInt(b.Year.slice(0, 4))
//     );
//   }
//   renderMovies(movies);
// }

// function searchKeyword(event) {
//   getMovies(event.target.value);
// }

async function getMovies(searchValue) {
  const response = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=d5c82cd3&s=${searchValue || "Nothing"}`
  );
  const { Search : data } = await response.json();
  movies = data
  getMovies(movies);
}

// function renderMovies(movies) {
//   const moviesHtml = movies.map((movie) => moviesHtml(movie)).join("");

//   moviesWrapper.innerHTML = moviesHtml;
// }

// function moviesHTML(movie) {
//   return `<div class="movie">
//             <figure class="movie__img__wrapper">
//               <img class="movie__img" src="${movie.Poster}" alt="">
//             </figure>
//             <div class="movie__title">
//               ${movie.Title}
//             </div>
//             <div class="movie__year">
//               ${movie.Year}
//             </div>
//           </div>`;
// }
// getMovies();