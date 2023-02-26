import React, { useContext } from "react";
import { formContext } from "../../store/context/formctx";

const Summary = () => {
  const { userPlan, userAddons, userBilling, total, setFormStep } =
    useContext(formContext);

  return (
    <section>
      <div role="non" className="mb-5">
        <h1 className="mb-2 text-2xl font-bold text-fem-denim">Finishing up</h1>
        <p className="text-base text-fem-gray">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <ul className="mb-6 flex flex-col gap-3 rounded-lg bg-fem-lightgray p-4">
        <li
          className={`flex items-center justify-between ${
            userAddons.length > 0 &&
            "border-b border-fem-gray border-opacity-20 pb-3"
          }`}
        >
          <div>
            <p className="font-sm font-medium capitalize leading-tight text-fem-denim">
              {userPlan.tier} ({userBilling})
            </p>
            <button
              className="inline-block text-sm text-fem-gray underline"
              onClick={() => setFormStep(2)}
            >
              Change
            </button>
          </div>
          <span className="text-sm font-bold text-fem-denim">
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
      <div className="flex items-center justify-between px-4">
        <span className="text-sm text-fem-gray">
          Total (per {userBilling === "monthly" ? "month" : "year"})
        </span>
        <span className="font-bold text-fem-purple">
          +${total}/{userBilling === "monthly" ? "mo" : "yr"}
        </span>
      </div>
    </section>
  );
};

export default Summary;
