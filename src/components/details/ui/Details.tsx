import { useAppContext } from "../../../app/ContextProvider";
import { useResetActiveMovie } from "../model/useResetActiveMovie";
import { Rating } from "./Rating";

export function Details() {
  const { movieDescription } = useAppContext();
  const handleClick = useResetActiveMovie();

  return (
    <div className="details">
      <header>
        <button onClick={handleClick} className="btn-back">
          &larr;
        </button>
        <img src={movieDescription?.poster} />
        <div className="details-overview">
          <h2>{movieDescription?.title}</h2>
          <p>
            {movieDescription?.released} &bull; {movieDescription?.runtime}
          </p>
          <p>{movieDescription?.genre}</p>
          <p>
            <span>⭐️</span>
            {movieDescription?.imdbRating} IMDb rating
          </p>
        </div>
      </header>
      {/* <p>{avgRating}</p> */}

      <section>
        <Rating />
        <div className="details-overview">
          <p>
            <em>{movieDescription?.plot}</em>
          </p>
          <p>Starring actors: {movieDescription?.actors}</p>
          <p>Directed by: {movieDescription?.director}</p>
        </div>
      </section>
    </div>
  );
}
