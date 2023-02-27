import { useContext, useState } from "react";
import Step from "./components/Step";
import Form from "./components/Form";
import { formContext } from "./store/context/formctx";
import Thankyou from "./components/Thankyou";
import Controls from "./components/Controls";

function App() {
  const { formStep, isFormComplete } = useContext(formContext);
  return (
    <main className="grid h-full grid-flow-row grid-cols-1 grid-rows-[99px_73px_1fr_max-content] lg:mx-auto lg:h-[600px] lg:max-w-[940px] lg:grid-cols-[274px_1fr] lg:grid-rows-[1fr_100px] lg:rounded-2xl lg:bg-white lg:p-4">
      <div className="col-start-1 col-end-1 row-start-1 row-end-3 bg-mobile-pattern bg-cover lg:row-end-3 lg:rounded-xl lg:bg-desktop-pattern"></div>
      <div className="col-start-1 col-end-1 row-start-1 row-end-2 flex items-center justify-center gap-4 text-sm leading-none text-white lg:flex-col lg:items-start lg:justify-start lg:gap-8 lg:p-10">
        <Step stepIndex={1} stepTitle={"Your info"} activeStep={formStep} />
        <Step stepIndex={2} stepTitle={"Select plan"} activeStep={formStep} />
        <Step stepIndex={3} stepTitle={"Add-ons"} activeStep={formStep} />
        <Step stepIndex={4} stepTitle={"Summary"} activeStep={formStep} />
      </div>
      <div className="col-start-1 col-end-2 row-span-2 row-start-2 row-end-4 px-4 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:px-24 lg:pt-10">
        {isFormComplete ? <Thankyou /> : <Form />}
      </div>
      {!isFormComplete && <Controls />}
    </main>
  );
}

export default App;
