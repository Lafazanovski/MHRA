import Hero from "@/components/hero/hero";
import SignUpBenefits from "@/components/signUpBenefits/signUpBenefits";
import SignUpComponent from "@/components/signUpComponent/signUpComponent";
import React from "react";

const SignUp = () => {
  return (
    <>
      <Hero
        title="Придружи ни се!"
        subtitle="Сакаш да се информираш подетално за бенефитите?"
        buttonLink="/signUp#sign-up-benefits"
        buttonText="Прочитај повеќе"
      />
      <SignUpComponent />
      <SignUpBenefits />
    </>
  );
};

export default SignUp;
