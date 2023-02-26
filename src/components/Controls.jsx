import React, { useContext } from "react";
import { formContext } from "../store/context/formctx";

const Controls = () => {
  const { formStep, setFormStep, setIsFormComplete } = useContext(formContext);

  return (
    <div className="flex flex-row-reverse items-center justify-between bg-white p-4">
      {formStep > 1 && (
        <button
          className=" order-2 inline-block w-24 py-3 text-sm font-medium text-fem-gray"
          onClick={() => {
            setFormStep((prevStep) => prevStep - 1);
          }}
        >
          Go back
        </button>
      )}
      {formStep === 4 ? (
        <button
          className=" order-1 inline-block w-24 rounded bg-fem-purple  py-3 text-sm font-medium text-white"
          onClick={() => {
            setIsFormComplete(true);
          }}
        >
          Confirm
        </button>
      ) : (
        <button
          className=" inline-block w-24 rounded bg-fem-denim py-3 text-sm font-medium text-white"
          onClick={() => {
            setFormStep((prevStep) => prevStep + 1);
          }}
        >
          Next Step
        </button>
      )}
    </div>
  );
};

export default Controls;
