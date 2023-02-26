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
    <section>
      <div role="non" className="mb-5">
        <h1 className="mb-2 text-2xl font-bold text-fem-denim">
          Select your plan
        </h1>
        <p className="text-base text-fem-gray">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <form action="post">
        <fieldset className="mb-6 flex flex-col gap-3.5">
          {renderedPlans.map((plan) => (
            <PlanOption key={plan.id} {...plan} />
          ))}
        </fieldset>
        <div className="flex flex-col items-center justify-center rounded-lg bg-fem-lightgray">
          <BillingToggle />
        </div>
      </form>
    </section>
  );
};

export default PlanForm;
