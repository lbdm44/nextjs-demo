import { useRouteError } from "react-router-dom";

function getErrorMsg(error: unknown): string {
  if (typeof error === "string") {
    return error;
  }

  if (typeof error === "object" && error !== null) {
    if ("message" in error && typeof error.message === "string") {
      return error.message;
    }

    if ("statusText" in error && typeof error.statusText === "string") {
      return error.statusText;
    }
  }

  return "";
}

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const errorMsg = getErrorMsg(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMsg}</i>
      </p>
    </div>
  );
}
