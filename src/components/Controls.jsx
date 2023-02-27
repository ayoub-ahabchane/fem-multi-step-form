import React, { useContext } from "react";
import { formContext } from "../store/context/formctx";

const Controls = () => {
  const { formStep, setFormStep, setIsFormComplete, isFormValid } =
    useContext(formContext);

  return (
    <div className="flex flex-row-reverse items-center justify-between bg-white p-4 lg:col-start-2 lg:row-start-2 lg:row-end-3 lg:px-24">
      {formStep > 1 && (
        <button
          className="order-2 inline-block w-24 py-3 text-sm font-medium text-fem-gray focus-within:text-fem-denim hover:text-fem-denim lg:w-[7.75rem] lg:text-base"
          onClick={() => {
            setFormStep((prevStep) => prevStep - 1);
          }}
        >
          Go back
        </button>
      )}
      {formStep === 4 ? (
        <button
          className="order-1 inline-block w-24 rounded bg-fem-purple py-3 text-sm font-medium text-white focus-within:bg-[#928CFF] hover:bg-[#928CFF] lg:w-[7.75rem] lg:rounded-lg lg:text-base"
          onClick={() => {
            setIsFormComplete(true);
          }}
        >
          Confirm
        </button>
      ) : (
        <button
          disabled={!isFormValid}
          className="inline-block w-24 rounded bg-fem-denim py-3 text-sm font-medium text-white focus-within:bg-[#164A8A] hover:bg-[#164A8A] disabled:bg-fem-gray lg:w-[7.75rem] lg:rounded-lg lg:text-base"
          onClick={(e) => {
            e.target.blur();
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
