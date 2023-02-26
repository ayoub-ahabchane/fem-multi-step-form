import { useContext, useState } from "react";
import Step from "./components/Step";
import Form from "./components/Form";
import { formContext } from "./store/context/formctx";
import Thankyou from "./components/Thankyou";
import Controls from "./components/Controls";

function App() {
  const { formStep, isFormComplete, personalInfo } = useContext(formContext);
  console.log(personalInfo);
  return (
    <main className="grid h-full grid-flow-row grid-cols-1 grid-rows-[99px_73px_1fr_max-content]">
      <div className="col-start-1 col-end-1 row-start-1 row-end-3 bg-mobile-pattern bg-cover"></div>
      <div className="col-start-1 col-end-1 row-start-1 row-end-2 flex items-center justify-center gap-4 text-sm font-bold leading-none text-white">
        <Step stepIndex={1} activeStep={formStep} />
        <Step stepIndex={2} activeStep={formStep} />
        <Step stepIndex={3} activeStep={formStep} />
        <Step stepIndex={4} activeStep={formStep} />
      </div>
      <div className="col-start-1 col-end-2 row-span-2 row-start-2 row-end-4 px-4">
        {isFormComplete ? <Thankyou /> : <Form />}
      </div>
      {!isFormComplete && <Controls />}
    </main>
  );
}

export default App;
