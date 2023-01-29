import React from "react";
import { useRouteError } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Lost from "../img/lost.svg";
import { Link } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <Header />
      {error.status === 404 ? (
        <main className="mx-auto space-y-4">
          <img
            src={Lost}
            alt="The page you are looking for is not here"
            className="h-96 mx-auto"
          />
          <h1 className="text-3xl text-center md:text-4xl">
            Uh oh. It looks like you might be lost
          </h1>
          <div className="flex mx-auto justify-center">
            <Link to="/">
              <Button>Go Home</Button>
            </Link>
          </div>
        </main>
      ) : (
        <main>
          <h1>{error.message}</h1>
          <Link to="/">
            <Button>Go Home</Button>
          </Link>
        </main>
      )}
    </div>
  );
}
