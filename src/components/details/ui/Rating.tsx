import { Star } from "./Star";
import { useAppContext } from "../../../app/ContextProvider";
import { useAddFavouriteMovie } from "../model/useAddFavouriteMovie";

export function Rating() {
  const { starRating } = useAppContext();
  const { favouriteMovie, handleAddFavouriteMovie } = useAddFavouriteMovie();

  return (
    <div className="rating">
      {!favouriteMovie && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* <div
          style={{
            display: "flex",
          }}
        ></div> */}
          {Array.from({ length: 10 }, (_, index) => (
            <Star key={index} value={String(index + 1)} />
          ))}

          <span
            style={{
              marginLeft: "10px",
              verticalAlign: "5px",
              color: "white",
            }}
          >
            {starRating} / 10
          </span>
        </div>
      )}

      {Number(starRating) > 0 && !favouriteMovie && (
        <button onClick={handleAddFavouriteMovie} className="btn-add">
          + Add to list
        </button>
      )}
      {favouriteMovie && (
        <p>
          You rated with movie {favouriteMovie.rating} <span>⭐️</span>
        </p>
      )}
    </div>
  );
}
