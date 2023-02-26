import React, { useContext, useRef } from "react";
import { formContext } from "../../store/context/formctx";

const AddonOption = ({ id, title, billing, price, desc }) => {
  const { userAddons, setUserAddons } = useContext(formContext);
  const checkBocxRef = useRef();
  const isIncluded = userAddons.find((addon) => addon.id === id) ? true : false;

  return (
    <label
      htmlFor={id}
      className={`flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-fem-border px-4 py-3 ${
        isIncluded ? "border-fem-purple bg-fem-lightgray" : "bg-white"
      } focus-within:border-fem-purple hover:border-fem-purple`}
    >
      <input
        className="h-5 w-5 shrink-0 checked:bg-fem-purple"
        ref={checkBocxRef}
        type="checkbox"
        id={id}
        checked={isIncluded}
        onChange={(e) => {
          if (e.target.checked) {
            setUserAddons((prevAddons) => {
              const newAddons = [
                ...prevAddons,
                { id, title, desc, price },
              ].sort((prevItem, nextItem) => prevItem.id > nextItem.id);
              return newAddons;
            });
          } else {
            setUserAddons((prevAddons) => {
              const filteredAddons = prevAddons.filter(
                (prevAddon) => prevAddon.id !== id
              );
              return filteredAddons ? filteredAddons : [];
            });
          }
        }}
      />
      <div className="grow">
        <p className="text-sm font-medium text-fem-denim">{title}</p>
        <p className="text-xs text-fem-gray">{desc}</p>
      </div>
      <span className="inline-block text-xs text-fem-purple">
        ${price}/{billing === "monthly" ? "mo" : "yr"}
      </span>
    </label>
  );
};

export default AddonOption;
