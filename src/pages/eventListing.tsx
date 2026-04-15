import AllEventsSearch from '@/components/allEventsSearch/allEventsSearch';
import Calendar from '@/components/calendar/calendar';
import Hero from '@/components/hero/hero';
import HrEvents from '@/components/hrEvents/hrEvents';
import React from 'react'

const EventListing = () => {
  return (
    <>
      <Hero
        title="HR Кафе"
        subtitle="Овој четврток кафе на тема како да примените техники и чекори од селф коучинг за подобро да се водите себеси... / 25 Јули, 2024"
        buttonText="Прочитај повеќе"
        buttonLink='/singleEventPage'
      />
      <Calendar />
      <AllEventsSearch />
      <HrEvents id='hr-kafe' title="HR Кафе" />
      <HrEvents id='hr-vikend' title="HR Викенд" />
      <HrEvents id='hr-vebinar' title="HR Вебинар" />
      <HrEvents id='hr-konferencii' title="HR Конференции" />
    </>
  );
}

export default EventListing