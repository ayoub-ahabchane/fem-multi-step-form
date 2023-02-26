import React, { useContext, useState } from "react";
import TypedInput from "./TypedInput";
import { formContext } from "../../store/context/formctx";

const PersonalInfoForm = () => {
  const { personalInfo, setPersonalInfo } = useContext(formContext);
  const [nameInput, setNameInput] = useState(personalInfo.name);
  const [emailInput, setEmailInput] = useState(personalInfo.email);
  const [phoneInput, setPhoneInput] = useState(personalInfo.phone);
  return (
    <section>
      <header className="mb-5">
        <h1 className="mb-2 text-2xl font-bold text-fem-denim">
          Personal Info
        </h1>
        <p className="text-base text-fem-gray">
          Please provide your name, email address, and phone number.
        </p>
      </header>
      <form action="post" className="flex flex-col gap-4">
        <TypedInput
          className="capitalize"
          type="text"
          name="name"
          id="name"
          placeholder="e.g. Stephen King"
          value={nameInput}
          onChange={(e) => {
            setNameInput(e.target.value);
          }}
          onBlur={() => {
            setPersonalInfo((prevInfo) => ({
              ...prevInfo,
              name: nameInput.toLowerCase(),
            }));
          }}
        />
        <TypedInput
          className="lowercase"
          type="email"
          name="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          value={emailInput}
          onChange={(e) => {
            setEmailInput(e.target.value.toLowerCase());
          }}
          onBlur={() => {
            setPersonalInfo((prevInfo) => ({ ...prevInfo, email: emailInput }));
          }}
        />
        <TypedInput
          type="tel"
          name="phone"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          value={phoneInput}
          onChange={(e) => {
            setPhoneInput(e.target.value);
          }}
          onBlur={() => {
            setPersonalInfo((prevInfo) => ({ ...prevInfo, phone: phoneInput }));
          }}
        />
      </form>
    </section>
  );
};

export default PersonalInfoForm;
