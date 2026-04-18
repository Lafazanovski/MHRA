import Link from "next/link";
import React from "react";

interface SingleEventPageProps {
  title: string;
  paragraph: string;
}

const EventsInfoComponent = ({
  title, paragraph
}: SingleEventPageProps) => {
  return (
    <>
      <div className="eventsInfoSection">
        <div className="eventsInfoContainer wrapper">
          <div className="eventsInfoTopDiv">
            <h1>{title}</h1>
            <p>
              {paragraph}
            </p>
          </div>
          <div className="eventsInfoBottomDiv">
            <div className="eventsInfoBottomLeftDiv">
              <div className="eventsInfoDescriptionDiv">
                <h2>Опис:</h2>
                <p>
                  Опис: Овој настан има за цел да ја истакне важноста од тесната
                  соработка меѓу HR одделот и претставникот на вработените
                  (синдикатот) во организациите. Преку овој настан ќе ги
                  разгледаме најдобрите практики, предизвиците и можностите кои
                  се јавуваат при заедничка работа на овие две страни, со цел
                  подобрување на работната атмосфера и организациската
                  ефикасност. Учесниците ќе имаат можност да слушнат од експерти
                  во областа, да дискутираат, за своите искуства и да пронајдат
                  нови начини за унапредување на соработката.
                </p>
              </div>
              <div className="eventsInfoPurposeDiv">
                <h2>Цел:</h2>
                <p>
                  Целта на овој HR кафе настан е да се создаде платформа за
                  отворена комуникација и размена на идеи која ќе придонесе за
                  подобра соработка меѓу HR одделот и синдикатот, што ќе
                  резултира со позитивни промени во работната организација.
                </p>
              </div>
            </div>
            <div className="eventsInfoBottomRightDiv">
              <div className="conferenceBuyTicketDiv">
                <Link href="/">
                  <button className="buyTicketBtn">
                    <div className="conferencePrimaryButton">$</div>
                    <div className="buyTicketBtnDiv">
                      <p>
                        <strong>Купи Карта</strong>
                      </p>
                      <p>mhraconference.com</p>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsInfoComponent;
