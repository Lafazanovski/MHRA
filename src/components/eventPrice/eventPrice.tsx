import Link from "next/link";
import React from "react";

const EventPrice = () => {
  return (
    <>
      <div className="eventPriceSection">
        <div className="eventPriceContainer wrapper">
          {/* Top */}
          <div className="eventPriceTopDiv">
            <div className="eventPriceTopLeftDiv">
              <h2>Цена за поединци</h2>
              <h3>500 мкд</h3>
            </div>
            <div className="eventPriceTopRightDiv">
              <h2>Цена за компании</h2>
              <h3>5000 мкд</h3>
            </div>
          </div>
          {/* Bottom */}
          <div className="eventPriceBottomDiv">
            <div className="eventPriceImageDiv">
              <div className="eventPriceBuyTicketDiv">
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
              <div className="eventPriceShareWithFriendsDiv">
                <Link href="/"><button className="primaryButton">Предложи на пријател</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPrice;
