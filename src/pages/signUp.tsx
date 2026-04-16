import Hero from "@/components/hero/hero";
import SignUpComponent from "@/components/signUpComponent/signUpComponent";
import React from "react";

const SignUp = () => {
  return (
    <>
      <Hero
        title="Придружи ни се!"
        subtitle="Сакаш да се информираш подетално за бенефитите?"
        buttonLink="/singUp"
        buttonText="Прочитај повеќе"
      />
      <SignUpComponent />
    </>
  );
};

export default SignUp;
