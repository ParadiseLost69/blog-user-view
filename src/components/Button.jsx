import React from "react";

export default function Button(props) {
  return (
    <>
      <button
        className={`${
          props.hidden === true ? "hidden" : ""
        } p-3 w-28 text-white outline-black m-1 bg-red-500 hover:bg-red-400 rounded-full md:block shadow-sm border-black border-2 press`}
      >
        {props.children}
      </button>
    </>
  );
}
