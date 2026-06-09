import { useAppContext } from "../../../app/ContextProvider";
import { FavouriteMovie } from "./FavouriteMovie";

export function ListFavourites() {
  const { watchedMovies } = useAppContext();

  return (
    <ul className="list">
      {watchedMovies.map((item) => (
        <FavouriteMovie key={item.imdbID} movie={item} />
      ))}
    </ul>
  );
}
