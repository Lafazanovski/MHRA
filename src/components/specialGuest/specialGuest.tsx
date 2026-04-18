import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const SpecialGuest = () => {
  return (
    <>
      <div className="specialGuestSection">
        <div className="specialGuestContainer wrapper">
          <h2>Специјални гости</h2>
          <p>
            Ова се луѓе од кои дефинитивно има што да се научи. Нивните
            достигнувања се огромни и со нивна помош секторот на HR успеа да
            достигне нови височини. Не пропуштајте ја оваа прилика да ја
            слушнете, а и да научите нешто од нивната мудрост.{" "}
          </p>
          {/* Guests Container */}
          <div className="guestsImagesContainer">
            {/* Top Div */}
            <div className="guestsImagesTopDiv">
              {/* 1 guest */}
              <div className="guestsImagesTopLeftDiv">
                <div className="guestImage guestImageTopLeft"></div>
                <div className="guestInfoDiv guestInfoDiv1">
                  <div className="guestInfoIcon">
                    <FontAwesomeIcon icon={faLinkedin} className="guestIcon" />
                  </div>
                  <div className="guestInfoText">
                    <h6>Мајк Вазауски</h6>
                    <p>СЕО на “Монстер Инк“</p>
                  </div>
                </div>
              </div>
              {/* 2 guest */}
              <div className="guestsImagesTopRightDiv">
                <div className="guestImage guestImageTopRight"></div>
                <div className="guestInfoDiv guestInfoDiv2">
                  <div className="guestInfoText">
                    <h6>Оливиа Оил</h6>
                    <p>СО на “Спинак“</p>
                  </div>
                  <div className="guestInfoIcon">
                    <FontAwesomeIcon icon={faLinkedin} className="guestIcon" />
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom Div */}
            <div className="guestsImagesBottomDiv">
              {/* 3 guest */}
              <div className="guestsImagesBottomLeftDiv">
                <div className="guestImage guestImageBottomLeft"></div>
                <div className="guestInfoDiv guestInfoDiv3">
                  <div className="guestInfoIcon">
                    <FontAwesomeIcon icon={faLinkedin} className="guestIcon" />
                  </div>
                  <div className="guestInfoText">
                    <h6>Џејмс Суливан</h6>
                    <p>Основач на “М.И.“</p>
                  </div>
                </div>
              </div>
              {/* 4 guest */}
              <div className="guestsImagesBottomRightDiv">
                <div className="guestImage guestImageBottomRight"></div>
                <div className="guestInfoDiv guestInfoDiv4">
                  <div className="guestInfoText">
                    <h6>Една Моде</h6>
                    <p>Основач на “Е“</p>
                  </div>
                  <div className="guestInfoIcon">
                    <FontAwesomeIcon icon={faLinkedin} className="guestIcon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* All Speakers Button */}
          <div className="AllSpeakersButton">
            <Link href="/conferencePage">
              <button className="primaryButton">Сите Спикери</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialGuest;
