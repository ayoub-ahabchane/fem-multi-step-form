import React, { useContext } from "react";
import { formContext } from "../store/context/formctx";

const Step = ({ stepIndex, activeStep }) => {
  return (
    <span
      className={`flex aspect-square w-8 items-center justify-center gap-4 rounded-full border ${
        stepIndex === activeStep
          ? "border-fem-sky bg-fem-sky text-fem-denim"
          : "border-white"
      }`}
    >
      {stepIndex}
    </span>
  );
};

export default Step;
