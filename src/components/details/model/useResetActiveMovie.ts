import { useEffect } from "react";
import { useAppContext } from "../../../app/ContextProvider";

export function useResetActiveMovie() {
  const { active, setActive, setStarRating } = useAppContext();

  function handleClick() {
    setActive(null);
  }

  useEffect(() => {
    setStarRating("0");
  }, [active, setStarRating]);

  return handleClick;
}
