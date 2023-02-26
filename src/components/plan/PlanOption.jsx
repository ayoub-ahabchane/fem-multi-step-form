import React, { useContext, useRef } from "react";
import { formContext } from "../../store/context/formctx";

const PlanOption = ({ icon, id, tier, billing, price }) => {
  const { userPlan, setUserPlan } = useContext(formContext);
  const isIncluded = userPlan.id === id;
  return (
    <div className="flex flex-col">
      <input
        className="peer h-0 w-0 appearance-none "
        id={`${tier}-${billing}`}
        type="radio"
        name="plan"
        value={{ tier, billing, price }}
        checked={isIncluded}
        onChange={(e) => {
          if (e.target.checked) {
            setUserPlan({
              id,
              tier,
              price,
            });
          }
        }}
      />
      <label
        htmlFor={`${tier}-${billing}`}
        className={`flex cursor-pointer ${
          billing === "monthly" ? "items-center" : "items-start"
        } gap-3.5 rounded-lg border border-fem-border bg-white p-3.5 focus-within:border-fem-purple hover:border-fem-purple peer-checked:border-fem-purple peer-checked:bg-fem-lightgray`}
      >
        {icon}
        <div className="flex flex-col gap-0.5">
          <span className="block font-medium capitalize text-fem-denim">
            {tier}
          </span>
          <span className="block text-fem-gray">
            ${price}/{billing === "monthly" ? "mo" : "yr"}
          </span>
          {billing === "yearly" && (
            <span className="text-xs text-fem-denim">+2 months free</span>
          )}
        </div>
      </label>
    </div>
  );
};

export default PlanOption;
