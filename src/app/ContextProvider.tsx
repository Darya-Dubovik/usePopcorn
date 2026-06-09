import { createContext, useContext, useState } from "react";
import type { IMovie } from "../components/navbar/types";
import type { IMovieDescription } from "../components/list-movies/types";
import type { IWatchedMovie } from "../components/details/types";

type Error = null | string;
//type SetError = (value: Error) => void;
type SetState<T> = (value: T) => void;
type FavouriteMovie = {
  imdbID: IMovie["imdbID"];
  rating: IMovieDescription["imdbRating"];
};

interface IAppContext {
  movies: IMovie[]; // описывается значение ключа movies (14 строка)
  setMovies: SetState<IMovie[]>;
  loadingMovies: boolean;
  setLoadingMovies: SetState<boolean>;
  loadingMoviesDescription: boolean;
  setLoadingMoviesDescription: SetState<boolean>;
  errorMovies: Error;
  setErrorMovies: SetState<Error>;
  errorMovieDescription: Error;
  setErrorMovieDescription: SetState<Error>;
  active: null | IMovie["imdbID"];
  setActive: SetState<null | IMovie["imdbID"]>;
  movieDescription: null | IMovieDescription;
  setMovieDescription: SetState<IMovieDescription>;
  starRating: FavouriteMovie["rating"];
  setStarRating: SetState<FavouriteMovie["rating"]>;
  starHover: FavouriteMovie["rating"];
  setStarHover: SetState<FavouriteMovie["rating"]>;
  favouritesRating: FavouriteMovie[];
  setFavouritesRating: SetState<FavouriteMovie[]>;
  watchedMovies: IWatchedMovie[];
  setWatchedMovies: SetState<IWatchedMovie[]>;
}

const AppContext = createContext<null | IAppContext>(null);

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [movies, setMovies] = useState<IAppContext["movies"]>([]);
  const [loadingMovies, setLoadingMovies] =
    useState<IAppContext["loadingMovies"]>(false);
  const [loadingMoviesDescription, setLoadingMoviesDescription] =
    useState(false);
  const [errorMovies, setErrorMovies] =
    useState<IAppContext["errorMovies"]>(null);
  const [errorMovieDescription, setErrorMovieDescription] =
    useState<IAppContext["errorMovieDescription"]>(null);
  const [active, setActive] = useState<IAppContext["active"]>(null);
  const [movieDescription, setMovieDescription] =
    useState<IAppContext["movieDescription"]>(null);
  const [starRating, setStarRating] = useState<IAppContext["starRating"]>("0");
  const [starHover, setStarHover] = useState<IAppContext["starHover"]>("0");
  const [favouritesRating, setFavouritesRating] = useState<
    IAppContext["favouritesRating"]
  >([]);
  const [watchedMovies, setWatchedMovies] = useState<
    IAppContext["watchedMovies"]
  >([]);

  return (
    <AppContext.Provider
      value={{
        movies: movies,
        setMovies: setMovies,
        loadingMovies: loadingMovies,
        setLoadingMovies: setLoadingMovies,
        loadingMoviesDescription: loadingMoviesDescription,
        setLoadingMoviesDescription: setLoadingMoviesDescription,
        errorMovies: errorMovies,
        setErrorMovies: setErrorMovies,
        errorMovieDescription: errorMovieDescription,
        setErrorMovieDescription: setErrorMovieDescription,
        active: active,
        setActive: setActive,
        movieDescription: movieDescription,
        setMovieDescription: setMovieDescription,
        starRating: starRating,
        setStarRating: setStarRating,
        starHover: starHover,
        setStarHover: setStarHover,
        favouritesRating: favouritesRating,
        setFavouritesRating: setFavouritesRating,
        watchedMovies: watchedMovies,
        setWatchedMovies: setWatchedMovies,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
}

// const data = {
//   movies: movies,
//   count: 5,
//   isLoading: true,
// };

// loading для одного фильма, State description,
