import React, { useContext } from "react";
import { formContext } from "../../store/context/formctx";

const Summary = () => {
  const { userPlan, userAddons, userBilling, total, setFormStep } =
    useContext(formContext);

  return (
    <div role="none">
      <header className="mb-5 lg:mb-10">
        <h1 className="mb-2 text-2xl font-bold text-fem-denim lg:mb-2.5 lg:text-[2rem]">
          Finishing up
        </h1>
        <p className="text-base text-fem-gray">
          Double-check everything looks OK before confirming.
        </p>
      </header>
      <ul className="mb-6 flex flex-col gap-3 rounded-lg bg-fem-lightgray p-4 lg:gap-4 lg:py-4 lg:px-6">
        <li
          className={`flex items-center justify-between ${
            userAddons.length > 0 &&
            "border-b border-fem-gray border-opacity-20 pb-3 lg:pb-6"
          }`}
        >
          <div>
            <p className="font-medium capitalize leading-tight text-fem-denim lg:text-base">
              {userPlan.tier} ({userBilling})
            </p>
            <button
              className="inline-block text-sm text-fem-gray underline focus-within:text-fem-purple hover:text-fem-purple"
              onClick={() => setFormStep(2)}
            >
              Change
            </button>
          </div>
          <span className="text-sm font-bold text-fem-denim lg:text-base">
            ${userPlan.price}/{userBilling === "monthly" ? "mo" : "yr"}
          </span>
        </li>
        {userAddons.map((addon) => (
          <li key={addon.id} className="flex justify-between">
            <span className="text-sm text-fem-gray">{addon.title}</span>
            <span className="text-sm text-fem-denim">
              +${addon.price}/{userBilling === "monthly" ? "mo" : "yr"}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between px-4 lg:px-6">
        <span className="text-sm text-fem-gray">
          Total (per {userBilling === "monthly" ? "month" : "year"})
        </span>
        <span className="font-bold text-fem-purple lg:text-xl">
          +${total}/{userBilling === "monthly" ? "mo" : "yr"}
        </span>
      </div>
    </div>
  );
};

export default Summary;
