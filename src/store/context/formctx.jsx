import { createContext, useEffect, useState } from "react";

export const formContext = createContext();

const FormContextProvider = ({ children }) => {
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [userBilling, setUserBilling] = useState("monthly");
  const [userAddons, setUserAddons] = useState([
    {
      id: 1,
      title: "Online service",
      desc: "Access to multiplayer games",
      price: 1,
    },
  ]);
  const [userPlan, setUserPlan] = useState({
    id: "p1",
    tier: "arcade",
    billing: userBilling,
    price: 9,
  });
  const [total, setTotal] = useState(() => calculate());

  function calculate() {
    const addonsTotal = userAddons.reduce(
      (total, addon) => total + addon.price,
      0
    );

    return addonsTotal + userPlan.price;
  }

  const addons = [
    {
      id: 1,
      title: "Online service",
      desc: "Access to multiplayer games",
      price: {
        monthly: 1,
        yearly: 10,
      },
    },
    {
      id: 2,
      title: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: {
        monthly: 2,
        yearly: 20,
      },
    },
    {
      id: 3,
      title: "Customizable profile",
      desc: "Custom theme on your profile",
      price: {
        monthly: 2,
        yearly: 20,
      },
    },
  ];

  const plans = [
    {
      id: "p1",
      tier: "arcade",
      billing: userBilling,
      price: {
        monthly: 9,
        yearly: 90,
      },
    },
    {
      id: "p2",
      tier: "advanced",
      billing: userBilling,
      price: {
        monthly: 12,
        yearly: 120,
      },
    },
    {
      id: "p3",
      tier: "pro",
      billing: userBilling,
      price: {
        monthly: 15,
        yearly: 150,
      },
    },
  ];

  useEffect(() => {
    if (userAddons.length > 0 && userBilling === "monthly") {
      setUserAddons((prevAddons) => {
        return prevAddons.map((prevAddon) => {
          const newPrice = addons.find((addon) => addon.id === prevAddon.id)
            .price.monthly;
          return { ...prevAddon, price: newPrice };
        });
      });
    } else if (userAddons.length > 0 && userBilling === "yearly") {
      setUserAddons((prevAddons) => {
        return prevAddons.map((prevAddon) => {
          const newPrice = addons.find((addon) => addon.id === prevAddon.id)
            .price.yearly;
          return { ...prevAddon, price: newPrice };
        });
      });
    }
  }, [userBilling]);

  useEffect(() => {
    if (userPlan && userBilling === "monthly") {
      setUserPlan((prevPlan) => {
        const newPrice = plans.find((plan) => plan.id === prevPlan.id).price
          .monthly;
        return { ...prevPlan, price: newPrice };
      });
    } else if (userPlan && userBilling === "yearly") {
      setUserPlan((prevPlan) => {
        const newPrice = plans.find((plan) => plan.id === prevPlan.id).price
          .yearly;
        return { ...prevPlan, price: newPrice };
      });
    }
  }, [userBilling]);

  useEffect(() => {
    setTotal(() => calculate());
  }, [userPlan, userAddons]);

  return (
    <formContext.Provider
      value={{
        plans,
        addons,
        personalInfo,
        setPersonalInfo,
        userPlan,
        setUserPlan,
        userBilling,
        setUserBilling,
        userAddons,
        setUserAddons,
        total,
        formStep,
        setFormStep,
        isFormComplete,
        setIsFormComplete,
      }}
    >
      {children}
    </formContext.Provider>
  );
};

export default FormContextProvider;
