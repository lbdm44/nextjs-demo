import { useState } from "react";

export function Counter(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        setCount((c) => c + 1);
      }}
      type="button"
    >
      Count is {count}
    </button>
  );
}
