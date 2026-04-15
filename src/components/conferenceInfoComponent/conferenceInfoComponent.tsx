import Link from 'next/link';
import React from 'react'

const ConferenceInfoComponent = () => {
  return (
    <>
      <div className="conferenceInfoSection">
        <div className="conferenceInfoContainer wrapper">
          <div className="conferenceInfoLeftDiv">
            <h1>13та меѓународна МАЧР конференција</h1>
            <div className="conferenceDateAndLocation">
              <p>24-25 Декември, 2024</p>
              <p>Хотел Континентал, Скопје</p>
            </div>
            <p>
              Годишната меѓународна HR конференција, организирана од страна на
              македонската асоцијација за човечки ресурси, има за цел да ги
              истражи и презентира најновите трендови и практики во областа на
              човечките ресурси кои ќе им помогнат на организациите да станата
              „future fit“. Оваа конференција ќе ги собере најдобрите умови и
              лидери во HR за да дискутираат и разменат идеи за проактивни
              стратегии кои можат да ја трансформираат работната сила и да ја
              унапредат работната ефикасност.{" "}
            </p>
            <div className="conferenceInfoBuyTicketDiv">
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
          <div className="conferenceInfoRightDiv">
            <div className="conferenceInfoRightDivImage">
              <div className="conferenceCircleImageDiv conferenceCircleImageLeftBottomDiv">
                <div className="conferenceCircleImage conferenceCircleImageLeftBottom"></div>
              </div>
              <div className="conferenceCircleImageDiv  conferenceCircleImageTopRightDiv">
                <div className="conferenceCircleImage conferenceCircleImageTopRight"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConferenceInfoComponent