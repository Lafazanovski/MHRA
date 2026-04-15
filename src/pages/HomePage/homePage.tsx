import AboutUs from "@/components/aboutUs/aboutUs";
import Blog from "@/components/blog/blog";
import Carousel from "@/components/carousel/carousel";
import Conference from "@/components/conference/conference";
import Events from "@/components/events/events";
import Hero from "@/components/hero/hero";
import JoiningBenefits from "@/components/joiningBenefits/joiningBenefits";
import Research from "@/components/research/research";
import { BlogPost } from "@/types";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch("/api/blogs?page=1&limit=4")
      .then((res) => res.json())
      .then((json) => setPosts(json.data));
  }, []);

  return (
    <>
      <Hero
        title="Луѓето пред се!"
        subtitle="Македонска Асоцијација за Човечки Ресурси"
        buttonText="Зачлени се"
        buttonLink="/signUp"
      />
      <Carousel />
      <Blog />
      <JoiningBenefits />
      <Events />
      <Conference />
      <Research />
      <AboutUs />
    </>
  );
};

export default HomePage;
