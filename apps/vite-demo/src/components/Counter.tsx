import * as React from "react";

interface CounterProps {}

export const Counter: React.FC<CounterProps> = () => {
  const [count, setCount] = React.useState(0);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
};
