import AboutUsBoard from "@/components/aboutUsBoard/aboutUsBoard";
import AboutUsCEO from "@/components/aboutUsCEO/aboutUsCEO";
import AboutUsMission from "@/components/aboutUsMission/aboutUsMission";
import AboutUsPurpose from "@/components/aboutUsPurpose/aboutUsPurpose";
import Carousel from "@/components/carousel/carousel";
import Hero from "@/components/hero/hero";
import React from "react";

const AboutUsPage = () => {
  return (
    <>
      <Hero
        title="Запознај го тимот"
        subtitle="Македонска Асоцијација за Човечки Ресурси"
        buttonText="Прочитај повеќе"
        buttonLink="/aboutUs#aboutUsMission"
      />
      <Carousel />
      <AboutUsMission />
      <AboutUsPurpose />
      <AboutUsCEO />
      <AboutUsBoard />
    </>
  );
};

export default AboutUsPage;
