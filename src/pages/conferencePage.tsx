import Carousel from "@/components/carousel/carousel";
import ConferenceAgenda from "@/components/conferenceAgenda/conferenceAgenda";
import ConferenceFacts from "@/components/conferenceFacts/conferenceFacts";
import ConferenceInfoComponent from "@/components/conferenceInfoComponent/conferenceInfoComponent";
import ConferenceLocation from "@/components/conferenceLocation/conferenceLocation";
import ConferencePackages from "@/components/conferencePackages/conferencePackages";
import HeroDetail from "@/components/heroDetail/heroDetail";
import SimilarBlogs from "@/components/similarBlogs/similarBlogs";
import SimilarEvents from "@/components/similarEvents/similarEvents";
import SpecialGuest from "@/components/specialGuest/specialGuest";
import Testimonials from "@/components/testimonials/testimonials";
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
      <ConferenceAgenda />
      <Testimonials />
      <ConferencePackages />
      <ConferenceLocation />
      <SimilarBlogs />
      <SimilarEvents />
    </>
  );
};

export default ConferencePage;
