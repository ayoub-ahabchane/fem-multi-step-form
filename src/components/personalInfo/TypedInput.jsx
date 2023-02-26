import React from "react";

const TypedInput = (props) => {
  return (
    <label
      htmlFor={props.id}
      className="block text-xs capitalize text-fem-denim"
    >
      {props.name}
      <input
        {...props}
        className="text-denim mt-1 w-full rounded px-4 py-2.5 font-medium leading-none outline outline-1 outline-fem-border placeholder:font-medium placeholder:text-fem-gray focus:outline-fem-purple"
      />
    </label>
  );
};

export default TypedInput;
