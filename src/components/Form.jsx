import React, { useContext } from "react";
import Wrapper from "./Wrapper";
import PersonalInfoForm from "./personalInfo/PersonalInfoForm";
import PlanForm from "./plan/PlanForm";
import { formContext } from "../store/context/formctx";
import AddonsForm from "./addons/AddonsForm";
import Summary from "./summary/Summary";

const Form = () => {
  const { formStep } = useContext(formContext);

  switch (formStep) {
    case 1:
      return (
        <Wrapper>
          <PersonalInfoForm />
        </Wrapper>
      );

      break;
    case 2:
      return (
        <Wrapper>
          <PlanForm />
        </Wrapper>
      );
      break;
    case 3:
      return (
        <Wrapper>
          <AddonsForm />
        </Wrapper>
      );
      break;
    case 4:
      return (
        <Wrapper>
          <Summary />
        </Wrapper>
      );
      break;
    default:
      break;
  }
};

export default Form;
