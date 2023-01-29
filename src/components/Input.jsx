import React from "react";

export default function Input({
  id,
  name = "Enter a name",
  placeholder = "Enter a Placeholder",
  required = false,
  type = "text",
}) {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={`${id}`}>{name}:</label>
      <input
        required={required}
        id={`${id}`}
        placeholder={`${placeholder}`}
        className="p-2 border border-gray-400 rounded-sm "
        type={type}
      />
    </div>
  );
}
