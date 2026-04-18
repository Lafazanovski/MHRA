import Carousel from "@/components/carousel/carousel";
import EventPrice from "@/components/eventPrice/eventPrice";
import EventsAgenda from "@/components/eventsAgenda/eventsAgenda";
import EventsInfoComponent from "@/components/eventsInfoComponent/eventsInfoComponent";
import EventSpeakers from "@/components/eventSpeakers/eventSpeakers";
import HeroDetail from "@/components/heroDetail/heroDetail";
import SimilarEvents from "@/components/similarEvents/similarEvents";
import { BlogPost } from "@/types";
import React from "react";

interface SingleEventPageProps {
  event?: BlogPost;
}

const defaultEvent: BlogPost = {
  id: 0,
  title: "Hr Кафе - настан",
  paragraph: "Одбери го твојот омилен настан.",
  image: "/images/img8.png",
};

const SingleEventPage = ({ event = defaultEvent }: SingleEventPageProps) => {
  return (
    <>
      <HeroDetail
        title={event.title}
        subtitle={event.paragraph}
        image="/images/img4.png"
      />
      <Carousel />
      <EventsInfoComponent title={event.title} paragraph={event.paragraph} />
      <EventsAgenda />
      <EventSpeakers />
      <EventPrice />
      <SimilarEvents />
    </>
  );
};

export default SingleEventPage;
