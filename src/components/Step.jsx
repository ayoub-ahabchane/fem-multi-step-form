import React, { useContext } from "react";
import { formContext } from "../store/context/formctx";

const Step = ({ stepIndex, stepTitle, activeStep }) => {
  return (
    <div className="flex lg:items-center lg:gap-4">
      <span
        className={`flex aspect-square w-8 items-center justify-center gap-4 rounded-full border font-bold ${
          stepIndex === activeStep
            ? "border-fem-sky bg-fem-sky text-fem-denim"
            : "border-white"
        }`}
      >
        {stepIndex}
      </span>
      <div className="hidden lg:block">
        <p className="text-xs uppercase text-fem-lightblue">Step {stepIndex}</p>
        <p className="text-sm font-bold uppercase tracking-widest">
          {stepTitle}
        </p>
      </div>
    </div>
  );
};

export default Step;
