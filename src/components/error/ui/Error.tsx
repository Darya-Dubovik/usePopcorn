//import { useAppContext } from "../../../app/ContextProvider";

export function Error({ error }: { error: string }) {
  //const { error } = useAppContext();

  return (
    <p className="error">
      <span>⛔️</span>
      {error}
    </p>
  );
}
