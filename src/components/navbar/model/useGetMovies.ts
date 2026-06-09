import { getMovies } from "../api/getMovies";
import { tranformMovies } from "../api/mappers";
import { debounce } from "../../../shared/lib/debounce";
import { useAppContext } from "../../../app/ContextProvider";
import type { AxiosError } from "axios";

export function useGetMovies() {
  const debouncedFunction = debounce(handleChange, 2000);
  //const { setMovies } = useContext<IAppContext | null>(AppContext);
  const { setMovies, setLoadingMovies, setErrorMovies, setActive } =
    useAppContext();

  async function handleChange(value: string) {
    try {
      setErrorMovies(null);
      setLoadingMovies(true);
      setActive(null);
      const moviesApi = await getMovies(value);
      //console.log(111);

      const movies = tranformMovies(moviesApi);
      setLoadingMovies(false);
      setMovies(movies);
      //console.log(movies);
    } catch (error) {
      setLoadingMovies(false);
      setErrorMovies((error as AxiosError).message);
      setMovies([]);
      //console.log((error as AxiosError).message);
      //console.log((error as {message: string}).message);
    }
  }

  return debouncedFunction;
}

//

// const { title} = {
//   title: "avatar",
//   id: 1,
// };

// const title = data.title;
// const id = data.id;
