import React from "react";

export default function Card({ children }) {
  return (
    <div className="flex flex-1 flex-col m-2 p-6 outline shadow-md bg-yellow-100 sm:w-96 sm:mx-auto ">
      {children}
    </div>
  );
}
