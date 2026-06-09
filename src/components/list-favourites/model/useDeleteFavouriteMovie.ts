import { useAppContext } from "../../../app/ContextProvider";
import type { IWatchedMovie } from "../../details/types";

export function useDeleteFavouriteMovie(movie: IWatchedMovie) {
  const { watchedMovies, setWatchedMovies } = useAppContext();

  function handleClickDelete() {
    const copyWatchedMovies = watchedMovies.filter(
      (item) => item.imdbID !== movie.imdbID,
    );

    localStorage.setItem("watched", JSON.stringify(copyWatchedMovies));
    setWatchedMovies(copyWatchedMovies);
  }
  return handleClickDelete;
}
