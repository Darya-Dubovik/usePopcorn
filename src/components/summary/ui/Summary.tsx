import { useAppContext } from "../../../app/ContextProvider";
import { useSumValues } from "../model/useSumValues";

export function Summary() {
  const { watchedMovies } = useAppContext();
  const { imdbWatchedMovies, ratingWatchedMovies, runtimeWatchedMovies } =
    useSumValues();

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watchedMovies.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{imdbWatchedMovies.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{ratingWatchedMovies.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{Math.round(runtimeWatchedMovies)} min</span>
        </p>
      </div>
    </div>
  );
}
