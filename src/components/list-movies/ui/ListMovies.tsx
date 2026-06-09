import { Movie } from "./Movie";
import { useAppContext } from "../../../app/ContextProvider";

export function ListMovies() {
  //const {context} = useContext(AppContext); //value из провайдера
  const { movies } = useAppContext();
  //console.log(movies);

  return (
    <ul className="list list-movies">
      {movies.map((item, index) => (
        <Movie
          key={index}
          image={item.poster}
          title={item.title}
          year={item.year}
          imdbID={item.imdbID}
        />
      ))}
      {/* <Movie /> */}
    </ul>
  );
}
