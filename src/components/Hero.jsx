import React from "react";
import Logo from "../img/software-engineer.svg";
import Button from "./Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="container flex flex-col-reverse mx-auto m-6 md:flex-row justify-center"
    >
      <div className="flex flex-col justify-center space-y-1 ">
        <h1 className="text-5xl md:text-left mt-2">Welcome to my Blog</h1>
        <p className="text-lg md:text-left">
          A blog dedicated to #tech, #programming, and any thing else I feel
          like talking about.
        </p>
        <div className="flex justify-center md:justify-start">
          <Button>View Posts</Button>
        </div>
      </div>
      <div className="flex">
        <img src={Logo} className="reversed" alt="dat alt do" />
      </div>
    </section>
  );
}
