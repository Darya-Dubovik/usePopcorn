// Запрос на сервер на получение фильмов в поиске

import axios from "axios";
import type { IMovieApi } from "../types";

interface IResponse {
  Search: IMovieApi[];
  Response: string;
}

interface IError {
  Response: string;
  Error: string;
}

export async function getMovies(query: string) {
  const response = await axios.get<IResponse | IError>(
    `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${query}`,
  );
  //console.log(response);

  if (response.data.Response === "True") {
    const movies = (response.data as IResponse).Search;
    return movies;
  } else {
    throw new Error((response.data as IError).Error);
  }
}

// типизировать переменные; обработка ошибок
