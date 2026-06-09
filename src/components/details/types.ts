import type { IMovieDescription } from "../list-movies/types";
import type { IMovie } from "../navbar/types";

export interface IWatchedMovie {
  imdbID: IMovie["imdbID"];
  imdbidRating: IMovieDescription["imdbRating"];
  poster: IMovieDescription["poster"];
  runtime: IMovieDescription["runtime"];
  year: IMovieDescription["released"];
  title: IMovieDescription["title"];
  rating: IMovieDescription["imdbRating"];
}
