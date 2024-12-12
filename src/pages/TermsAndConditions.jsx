import React from "react";
import TermsText from "./T&C Texts";

const TermsAndConditions = () => {
  return (
    <div className="bg-white text-gunmetal text-xs md:text-sm">
      <div className="mx-auto text-justify xl:mx-20 2xl:mx-32 px-4 sm:px-6 lg:px-16 py-4 sm:py-6 md:py-8">
        <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-4 md:mb-6">
          Terms & Conditions
        </h1>
        <TermsText />
      </div>
    </div>
  );
};

export default TermsAndConditions;
