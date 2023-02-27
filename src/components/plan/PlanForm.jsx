import React, { useContext } from "react";
import ArcadeLogo from "../svg/ArcadeLogo";
import PlanOption from "./PlanOption";
import AdvancedLogo from "../svg/AdvancedLogo";
import ProLogo from "../svg/ProLogo";
import { formContext } from "../../store/context/formctx";
import BillingToggle from "./BillingToggle";

const PlanForm = () => {
  const { plans, userBilling } = useContext(formContext);
  const renderedPlans = plans.map((plan) => ({
    ...plan,
    price: userBilling === "monthly" ? plan.price.monthly : plan.price.yearly,
    icon:
      plan.id === "p1" ? (
        <ArcadeLogo />
      ) : plan.id === "p2" ? (
        <AdvancedLogo />
      ) : (
        <ProLogo />
      ),
  }));

  return (
    <div role="none">
      <header className="mb-5 lg:mb-10">
        <h1 className="mb-2 text-2xl font-bold text-fem-denim lg:mb-2.5 lg:text-[2rem]">
          Select your plan
        </h1>
        <p className="text-base text-fem-gray">
          You have the option of monthly or yearly billing.
        </p>
      </header>
      <form action="post">
        <fieldset className="mb-6 flex flex-col gap-3.5 lg:mb-8 lg:grid lg:grid-cols-3 lg:gap-x-[1.125rem]">
          {renderedPlans.map((plan) => (
            <PlanOption key={plan.id} {...plan} />
          ))}
        </fieldset>
        <div className="flex flex-col items-center justify-center rounded-lg bg-fem-lightgray">
          <BillingToggle />
        </div>
      </form>
    </div>
  );
};

export default PlanForm;
