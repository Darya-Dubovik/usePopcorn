import { useMemo } from "react";
import { useAppContext } from "../../../app/ContextProvider";
import type { IWatchedMovie } from "../types";

export function useAddFavouriteMovie() {
  const {
    active,
    setActive,
    starRating,
    movieDescription,
    watchedMovies,
    setWatchedMovies,
  } = useAppContext();
  const favouriteMovie = useMemo(
    () => watchedMovies.find((item) => item.imdbID === active),
    [active, watchedMovies],
  );

  function handleAddFavouriteMovie() {
    if (active) {
      let watched: null | IWatchedMovie[] = JSON.parse(
        localStorage.getItem("watched")!,
      );
      console.log(watched);

      if (movieDescription !== null) {
        const watchedMovie: IWatchedMovie = {
          imdbID: active,
          imdbidRating: movieDescription.imdbRating,
          poster: movieDescription.poster,
          runtime: movieDescription.runtime,
          year: movieDescription.released,
          title: movieDescription.title,
          rating: starRating,
        };

        if (watched !== null) {
          watched.push(watchedMovie);
        } else {
          watched = [];
          watched.push(watchedMovie);
        }

        localStorage.setItem("watched", JSON.stringify(watched));
        setWatchedMovies(watched);
      }

      setActive(null);
    }
  }

  return { favouriteMovie, handleAddFavouriteMovie };
}
