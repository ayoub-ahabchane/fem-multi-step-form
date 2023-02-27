import React, { useContext } from "react";
import { formContext } from "../../store/context/formctx";
import AddonOption from "./AddonOption";

const AddonsForm = () => {
  const { userBilling, addons } = useContext(formContext);
  const renderedAddons = addons.map((addon) => ({
    ...addon,
    price: userBilling === "monthly" ? addon.price.monthly : addon.price.yearly,
  }));

  return (
    <div role="none">
      <header className="mb-5 lg:mb-10">
        <h1 className="mb-2 text-2xl font-bold text-fem-denim lg:mb-2.5 lg:text-[2rem]">
          Pick add-ons
        </h1>
        <p className="text-base text-fem-gray">
          Add-ons help enhance your gaming experience.
        </p>
      </header>
      <form action="post">
        <fieldset className="flex flex-col gap-3.5">
          {renderedAddons.map((addon) => (
            <AddonOption key={Math.random()} billing={userBilling} {...addon} />
          ))}
        </fieldset>
      </form>
    </div>
  );
};

export default AddonsForm;
