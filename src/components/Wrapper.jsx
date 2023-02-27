import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div
      role="none"
      className="mx-auto max-w-lg rounded-xl bg-white py-8 px-6 shadow-[0px_25px_40px_-20px_rgba(0,0,0,0.0951141)] lg:py-0 lg:px-0 lg:shadow-none"
    >
      {children}
    </div>
  );
};

export default Wrapper;
