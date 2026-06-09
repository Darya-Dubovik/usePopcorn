import type { IMovieDescription, IMovieDescriptionApi } from "../types";

// export function transformMovieDescription(movie: IMovieDescriptionApi) {
//   const obj: IMovieDescription | Record<string, string> = {};
//   for (const key in movie) {
//     obj[key[0].toLowerCase() + key.slice(1)] = movie[key];
//   }

//   console.log(obj);
// }

//Record, ошибка типизации movie

export function transformMovieDescription(
  movie: IMovieDescriptionApi,
): IMovieDescription {
  return {
    poster: movie.Poster,
    title: movie.Title,
    released: movie.Released,
    runtime: movie.Runtime,
    genre: movie.Genre,
    imdbRating: movie.imdbRating,
    plot: movie.Plot,
    actors: movie.Actors,
    director: movie.Director,
  };
}
