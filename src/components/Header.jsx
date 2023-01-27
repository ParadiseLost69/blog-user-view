import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-offWhite dark:bg-black flex justify-between m-6 items-center">
      <Link to={"/"}>
        <h1 className="text-3xl dark:bg-white md:text-4xl">
          {" "}
          <span className="text-red-500 font-bold">Teddy's</span> Blog
        </h1>
      </Link>
      <div className="flex space-x-2">
        <Link to="/login">
          <Button hidden={true}>Login</Button>
        </Link>
        <Button hidden={true}>Register</Button>
      </div>
    </header>
  );
}
