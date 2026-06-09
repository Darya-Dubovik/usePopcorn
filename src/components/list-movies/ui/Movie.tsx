import type { IMovie } from "../../navbar/types";
import { useGetMovieDescription } from "../model/useGetMovieDescription";
import { useAppContext } from "../../../app/ContextProvider";

interface MovieProps {
  image: IMovie["poster"];
  title: IMovie["title"];
  year: IMovie["year"];
  imdbID: IMovie["imdbID"];
}

export function Movie({ image, title, year, imdbID }: MovieProps) {
  const { active } = useAppContext();

  const handleClick = useGetMovieDescription(imdbID);
  return (
    <li className={active === imdbID ? "active" : ""} onClick={handleClick}>
      <img src={image} alt={`movie.Title poster`} />
      <h3>{title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{year}</span>
        </p>
      </div>
    </li>
  );
}
