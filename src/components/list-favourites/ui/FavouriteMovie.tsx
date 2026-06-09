import type { IWatchedMovie } from "../../details/types";
import { useDeleteFavouriteMovie } from "../model/useDeleteFavouriteMovie";

export function FavouriteMovie({ movie }: { movie: IWatchedMovie }) {
  const handleClickDelete = useDeleteFavouriteMovie(movie);

  return (
    <li>
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbidRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.rating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime}</span>
        </p>
        <button onClick={handleClickDelete} className="btn-delete">
          X
        </button>
      </div>
    </li>
  );
}
