import { useState } from "react";

export function Box({ children }: { children: React.ReactNode }) {
  const [opened, setOpened] = useState(true);

  function handleChange() {
    //opened ? setOpened(false) : setOpened(true);
    setOpened(!opened);
  }

  return (
    <div className="box">
      <button onClick={handleChange} className="btn-toggle">
        {opened ? "-" : "+"}
      </button>
      {opened ? children : null}
    </div>
  );
}
