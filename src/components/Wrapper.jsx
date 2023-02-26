import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div
      role="none"
      className="rounded-xl bg-white py-8 px-6 shadow-[0px_25px_40px_-20px_rgba(0,0,0,0.0951141)]"
    >
      {children}
    </div>
  );
};

export default Wrapper;
