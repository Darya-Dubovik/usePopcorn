import axios from "axios";
//import { transformMovieDescription } from "./mappers";
import type { IMovie } from "../../navbar/types";
import type { IMovieDescriptionApi } from "../types";

interface IError {
  Error: string;
  Response: string;
}

export async function getMovieDescription(imdbID: IMovie["imdbID"]) {
  const response = await axios.get<IMovieDescriptionApi | IError>(
    `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&i=${imdbID}`,
  );
  //console.log(response);

  if (response.data.Response === "True") {
    const result = response.data as IMovieDescriptionApi;
    return result;
  } else {
    throw new Error((response.data as IError).Error);
  }
}

//ошибка тпиизации response.data
