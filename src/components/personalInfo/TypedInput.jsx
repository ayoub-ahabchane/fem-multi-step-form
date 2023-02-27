import React from "react";

const TypedInput = (props) => {
  return (
    <label
      htmlFor={props.id}
      className="block text-xs text-fem-denim lg:text-sm"
    >
      <div className="flex justify-between">
        <span className="capitalize">
          {props.name === "email" ? "Email Address" : props.name}
        </span>
        {props.valid === "false" && (
          <span className="font-bold text-fem-error">
            This field is required
          </span>
        )}
      </div>
      <input
        {...props}
        className={`text-denim mt-1 w-full rounded px-4 py-2.5 font-medium leading-none outline outline-1 ${
          props.valid === "true" ? "outline-fem-border" : "outline-fem-error"
        } placeholder:font-medium placeholder:text-fem-gray focus:outline-fem-purple lg:py-3`}
        autoComplete="off"
      />
    </label>
  );
};

export default TypedInput;
