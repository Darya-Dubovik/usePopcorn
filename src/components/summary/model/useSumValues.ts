import { useMemo } from "react";
import { useAppContext } from "../../../app/ContextProvider";

export function useSumValues() {
  const { watchedMovies } = useAppContext();

  const imdbWatchedMovies = useMemo(() => {
    if (watchedMovies.length === 0) {
      return 0;
    } else {
      return (
        watchedMovies.reduce((sum, item) => {
          return sum + Number(item.imdbidRating);
        }, 0) / watchedMovies.length
      );
    }
  }, [watchedMovies]);

  const ratingWatchedMovies = useMemo(() => {
    if (watchedMovies.length === 0) {
      return 0;
    } else {
      const ratingWatchedMovies =
        watchedMovies.reduce((sum, item) => {
          return sum + Number(item.rating);
        }, 0) / watchedMovies.length;

      return ratingWatchedMovies;
    }
  }, [watchedMovies]);

  const runtimeWatchedMovies = useMemo(() => {
    if (watchedMovies.length === 0) {
      return 0;
    } else {
      const runtimeWatchedMovies =
        watchedMovies.reduce((sum, item) => {
          if (item.runtime !== "N/A") {
            return sum + parseInt(item.runtime);
          } else {
            return sum;
          }
        }, 0) / watchedMovies.length;

      return runtimeWatchedMovies;
    }
  }, [watchedMovies]);

  return { imdbWatchedMovies, ratingWatchedMovies, runtimeWatchedMovies };
}
