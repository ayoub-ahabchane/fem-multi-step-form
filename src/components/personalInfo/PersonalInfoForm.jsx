import React, {
  createRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import TypedInput from "./TypedInput";
import { formContext } from "../../store/context/formctx";

const PersonalInfoForm = () => {
  const { personalInfo, setPersonalInfo, setIsFormValid } =
    useContext(formContext);
  const [nameInput, setNameInput] = useState(personalInfo.name);
  const [emailInput, setEmailInput] = useState(personalInfo.email);
  const [phoneInput, setPhoneInput] = useState(personalInfo.phone);

  const [isNameValid, setIsNameValid] = useState("true");
  const [isEmailValid, setIsEmailValid] = useState("true");
  const [isPhoneValid, setIsPhoneValid] = useState("true");

  useEffect(() => {
    if (!phoneInput || !nameInput || !emailInput) {
      setIsFormValid(false);
    }
  }, [phoneInput, nameInput, emailInput]);
  return (
    <div role="none presentation">
      <header className="mb-5 lg:mb-10">
        <h1 className="mb-2 text-2xl font-bold text-fem-denim lg:mb-2.5 lg:text-[2rem]">
          Personal Info
        </h1>
        <p className="text-base text-fem-gray">
          Please provide your name, email address, and phone number.
        </p>
      </header>
      <form action="post" className="flex flex-col gap-4 lg:gap-6">
        <TypedInput
          type="text"
          name="name"
          id="name"
          placeholder="e.g. Stephen King"
          value={nameInput}
          valid={isNameValid}
          onChange={(e) => {
            if (nameInput) {
              setIsNameValid("true");
            }
            setNameInput(e.target.value);
          }}
          onBlur={() => {
            if (!nameInput) {
              setIsNameValid("false");
            } else {
              setPersonalInfo((prevInfo) => ({
                ...prevInfo,
                name: nameInput.toLowerCase(),
              }));
            }
          }}
          onFocus={() => {
            setIsNameValid("true");
          }}
        />
        <TypedInput
          type="email"
          name="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          value={emailInput}
          valid={isEmailValid}
          onChange={(e) => {
            if (emailInput) {
              setIsEmailValid("true");
            }
            setEmailInput(e.target.value.toLowerCase());
          }}
          onBlur={() => {
            if (!emailInput) {
              setIsEmailValid("false");
            } else {
              setPersonalInfo((prevInfo) => ({
                ...prevInfo,
                email: emailInput,
              }));
            }
          }}
          onFocus={() => {
            setIsEmailValid("true");
          }}
        />
        <TypedInput
          type="tel"
          name="phone"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          value={phoneInput}
          valid={isPhoneValid}
          onChange={(e) => {
            if (phoneInput) {
              setIsPhoneValid("true");
            }
            setPhoneInput(e.target.value.toLowerCase());
          }}
          onBlur={() => {
            if (!phoneInput) {
              setIsPhoneValid("false");
            } else {
              setPersonalInfo((prevInfo) => ({
                ...prevInfo,
                phone: phoneInput,
              }));
            }
          }}
          onFocus={() => {
            setIsPhoneValid("true");
          }}
        />
      </form>
    </div>
  );
};

export default PersonalInfoForm;
