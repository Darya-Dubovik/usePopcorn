// ф-ции mappers для преобразования информации с бекэнда для удобства

import type { IMovieApi } from "../types";

export function tranformMovies(movies: IMovieApi[]) {
  return movies.map((item) => ({
    poster: item.Poster,
    title: item.Title,
    type: item.Type,
    year: item.Year,
    imdbID: item.imdbID,
  }));
}
