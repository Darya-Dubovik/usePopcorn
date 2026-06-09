import type { AxiosError } from "axios";
import { useAppContext } from "../../../app/ContextProvider";
import { getMovieDescription } from "../api/getMovieDescription";
import type { IMovie } from "../../navbar/types";
import { transformMovieDescription } from "../api/mappers";

export function useGetMovieDescription(imdbID: IMovie["imdbID"]) {
  const {
    setErrorMovieDescription,
    setLoadingMoviesDescription,
    setActive,
    setMovieDescription,
  } = useAppContext();

  async function handleClick() {
    //getMovieDescription(imdbID);

    setActive(imdbID);

    try {
      setErrorMovieDescription(null);
      setLoadingMoviesDescription(true);
      const movieDescriptionApi = await getMovieDescription(imdbID);
      const movieDescription = transformMovieDescription(movieDescriptionApi);
      setLoadingMoviesDescription(false);
      setMovieDescription(movieDescription);
      console.log(movieDescription);
    } catch (error) {
      setLoadingMoviesDescription(false);
      setErrorMovieDescription((error as AxiosError).message);
    }
  }

  return handleClick;
}
