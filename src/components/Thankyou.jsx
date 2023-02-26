import React from "react";
import Wrapper from "./Wrapper";
import CompleteLogo from "./svg/CompleteLogo";

const Thankyou = () => {
  return (
    <Wrapper>
      <section className="flex flex-col items-center justify-center gap-6 py-16">
        <CompleteLogo />
        <div>
          <h1 className="mb-2.5 text-center text-2xl font-bold text-fem-denim">
            Thank you!
          </h1>
          <p className="text-center text-fem-gray">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </section>
    </Wrapper>
  );
};

export default Thankyou;
