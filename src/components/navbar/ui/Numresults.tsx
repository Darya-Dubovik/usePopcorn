import { useAppContext } from "../../../app/ContextProvider";

export function Numresults() {
  const { movies } = useAppContext();

  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
