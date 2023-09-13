import * as React from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <h2>{title}</h2>
      <p>{children}</p>
    </>
  );
}
