import Carousel from "@/components/carousel/carousel";
import ConferenceFacts from "@/components/conferenceFacts/conferenceFacts";
import ConferenceInfoComponent from "@/components/conferenceInfoComponent/conferenceInfoComponent";
import HeroDetail from "@/components/heroDetail/heroDetail";
import SimilarBlogs from "@/components/similarBlogs/similarBlogs";
import SimilarEvents from "@/components/similarEvents/similarEvents";
import SpecialGuest from "@/components/specialGuest/specialGuest";
import React from "react";

const ConferencePage = () => {
  return (
    <>
      <HeroDetail
        title="13та меѓународна МАЧР конференција"
        subtitle="24 - 25 Декември, 2024"
        image="/images/img8.png"
      />
      <Carousel />
      <ConferenceInfoComponent />
      <ConferenceFacts />
      <SpecialGuest />
      <SimilarBlogs />
      <SimilarEvents />
    </>
  );
};

export default ConferencePage;
