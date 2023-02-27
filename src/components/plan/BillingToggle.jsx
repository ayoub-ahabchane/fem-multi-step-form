import React, { useContext, useRef } from "react";
import { formContext } from "../../store/context/formctx";

const BillingToggle = () => {
  const toggleRef = useRef();

  const { userBilling, setUserBilling } = useContext(formContext);

  return (
    <div className="relative">
      <input
        ref={toggleRef}
        type="checkbox"
        name="monthlybilling"
        id="yearlyBilling"
        aria-label="Opt for yearly billing"
        className="absolute appearance-none"
        checked={userBilling === "yearly"}
        onChange={() => {
          if (toggleRef.current.checked) {
            setUserBilling("yearly");
          } else {
            setUserBilling("monthly");
          }
        }}
      />
      <label
        htmlFor="yearlyBilling"
        className="flex cursor-pointer items-center justify-center gap-6 py-3.5 text-sm font-medium"
      >
        <span
          className={`${
            userBilling === "monthly" ? "text-denim" : "text-fem-gray"
          }`}
        >
          Monthly
        </span>
        <span className="relative flex h-5 w-9 items-center rounded-xl bg-fem-denim">
          <span
            className={`absolute ${
              userBilling === "monthly" ? "left-[4px]" : "right-[4px]"
            } inline-block aspect-square w-3 rounded-full bg-white`}
          ></span>
        </span>
        <span
          className={`${
            userBilling === "yearly" ? "text-denim" : "text-fem-gray"
          }`}
        >
          Yearly
        </span>
      </label>
    </div>
  );
};

export default BillingToggle;
